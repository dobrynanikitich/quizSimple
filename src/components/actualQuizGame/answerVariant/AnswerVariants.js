import React, { Component } from 'react';

import classes from './AnswerVariants.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(classes);

class AnswerVariant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCorrectAnswer: props.isCorrectAnswer,
            isClicked: false,
        }
    }

    clickAnswerHandler = (e, isCorrectAnswer) => {
        const { checkAnswerHandler, isRightAnswerDone } = this.props;
        if (isRightAnswerDone) {
            return
        }
        const { isClicked } = this.state;
        if (!isClicked) {
            this.setState({ isClicked: true });
            if (!isRightAnswerDone) {
                checkAnswerHandler(e, isCorrectAnswer);
            }
        }
    }

    render() {
        const { answerVariant, currentQuizType } = this.props;
        const { isCorrectAnswer, isClicked } = this.state;
        let currentObjectField;
        switch (currentQuizType) {
            case 'country':
                currentObjectField = answerVariant.Name;
                break;
            case 'flag':
                currentObjectField = <img alt='country flag' src={answerVariant.Flag} className={classes.FlagAnswerImg}/>;
                break;
            case 'currency':
                currentObjectField = answerVariant.CurrencyName;
                break;
            case 'area':
                currentObjectField = answerVariant.Area;
        }
        let className = cx({
            Answer: true,
            RightAnswer: isClicked && isCorrectAnswer,
            WrongAnswer: isClicked && !isCorrectAnswer,
        });
        return (
            <li
                className={className}
                onClick={(e) => this.clickAnswerHandler(e, isCorrectAnswer)}
            >
                {currentObjectField}
            </li>
        )
    }
}

export default AnswerVariant