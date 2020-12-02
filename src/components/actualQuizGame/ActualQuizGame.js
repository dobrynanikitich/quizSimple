import React, { Component } from 'react';
import classes from './ActualQuizGame.module.scss';
import ClipLoader from "react-spinners/ClipLoader";

import Button from '../button/Button';
import GameOverModal from '../modals/GameOverModal';
import QuizCard from '../quizCard/QuizCard';
import Timer from '../timer/Timer';

class CountryQuiz extends Component {
    state = {
        currentEl: 0,
        isLoading: this.sortedCountriesList ? false : true,
        answers: [],
        currentPoints: 6,
        isRightAnswerDone: false,
        isGameOver: false,
    };

    componentDidMount() {
        const { countriesList } = this.props; 
        const sortedCountriesList = countriesList.sort(this.randomSort);
        this.setState({ 
            sortedCountriesList: sortedCountriesList,
            isLoading: false,
        }, () => this.createAnswerVariants())
    }

    randomSort = () =>  {
        return 0.5 - Math.random();
    }

    createAnswerVariants = () => {
        let { answers, sortedCountriesList, currentEl } = this.state;
        const { currentQuizType } = this.props;
        let currentObjectField;
        switch (currentQuizType) {
            case 'country':
                currentObjectField = 'Name';
                break;
            case 'flag':
                currentObjectField = 'Flag';
                break;
            case 'currency':
                currentObjectField = 'CurrencyName';
                break;
            case 'area':
                currentObjectField = 'Area';
                break;
        }
        answers = [];
        answers.push(sortedCountriesList[currentEl]);
        do {
            let num = Math.floor((Math.random() * 250));
            if (num === currentEl || answers.find(item => item[currentObjectField] === sortedCountriesList[num][currentObjectField])) {
                continue
            } else {
                answers.push(sortedCountriesList[num]);
            }
        } while (answers.length !== 4)
        this.setState({ answers: answers.sort(this.randomSort) })
    }

    nextQuestionHandler = () => {
        const { isRightAnswerDone } = this.state;
        if (!isRightAnswerDone) {
            return;
        } else {
            this.setState((prevState) => {
                return {
                    currentEl: prevState.currentEl + 1,
                    currentPoints: 6,
                    isRightAnswerDone: false,
                }
            }, () => this.createAnswerVariants());
        }
    }

    returnToMainPageHandler = () => {
        const { changeState, currentQuizType, isLogin } = this.props;
        changeState('initialState');
        changeState('currentQuizType', currentQuizType);
        changeState('isLogin', isLogin); 
    }

    checkAnswerHandler = (e, isCorrectAnswer) => {
        const { sortedCountriesList, currentEl, currentPoints } = this.state;
        const { changeState, currentScore, currentQuizType } = this.props;
        const { target } = e;
        let currentObjectField;
        switch (currentQuizType) {
            case 'country':
                currentObjectField = 'Name';
                break;
            case 'flag':
                currentObjectField = 'Flag';
                break;
            case 'currency':
                currentObjectField = 'CurrencyName';
                break;
            case 'area':
                currentObjectField = 'Area';
                break;
        }
        if (isCorrectAnswer) {
            changeState('currentScore', currentPoints + currentScore);
            this.setState({ isRightAnswerDone: true });
        } else {
            this.setState((prevState) => {
                return { currentPoints: prevState.currentPoints - 2  }
            });
        }
    }

    timeIsLeftHadler = () => {
        this.setState({ isGameOver: true })
    }

    render() {
        const { isLoading, currentEl, answers, isRightAnswerDone, sortedCountriesList, isGameOver } = this.state;
        const { currentQuizType, currentScore } = this.props;
        return (
            <section className={classes.CountryQuiz}>
                {isGameOver && 
                    <div>
                        <GameOverModal 
                            currentScore={currentScore} 
                            returnToMainPageHandler={this.returnToMainPageHandler} />
                    </div>}
                {!isGameOver && (isLoading ? <ClipLoader /> : (
                    <>
                        <Timer 
                            timeIsLeftHadler={this.timeIsLeftHadler}
                        />
                        <QuizCard 
                            currentQuizType={currentQuizType}
                            currentEl={currentEl}
                            answers={answers}
                            sortedCountriesList={sortedCountriesList}
                            isRightAnswerDone={isRightAnswerDone}
                            checkAnswerHandler={this.checkAnswerHandler}
                        />
                        <Button click={this.nextQuestionHandler} buttonName={'next'} />
                        <Button click={this.returnToMainPageHandler} buttonName={'refresh'} />
                    </>
                ))
                }
            </section>
        )
    }
}

export default CountryQuiz;