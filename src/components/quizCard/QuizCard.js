import React from 'react';

import AnswerVariant from '../actualQuizGame/answerVariant/AnswerVariants';

import classes from './QuizCard.module.scss';

const quizCard = ({ currentQuizType, currentEl, answers, sortedCountriesList, isRightAnswerDone, checkAnswerHandler }) => {
    let questionBlock;
    switch(currentQuizType) {
        case 'country':
            questionBlock = <img src={sortedCountriesList[currentEl].Flag} />
            break;
        case 'flag':
            questionBlock = <div>{sortedCountriesList[currentEl].Name}</div>
            break;
        case 'currency':
            questionBlock = <img src={sortedCountriesList[currentEl].Flag} />
            break;
        case 'area':
            questionBlock = <img src={sortedCountriesList[currentEl].Flag} />
    }

    return (
        <div className={classes.AnswersListWrapper}>
            <div className={currentQuizType === 'flag' ? classes.TextBlock : classes.FlagBlock}>
                { questionBlock }
            </div>
            <ul className={currentQuizType === 'flag' ? classes.AnswerListFlags : classes.AnwersListText}>
                {
                    answers.map(item => {
                        return (
                            <AnswerVariant 
                                key={item.NativeName} 
                                answerVariant={item} 
                                checkAnswerHandler={checkAnswerHandler}
                                isCorrectAnswer={item.Name === sortedCountriesList[currentEl].Name}
                                isRightAnswerDone={isRightAnswerDone}
                                currentQuizType={currentQuizType}
                            />
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default quizCard;