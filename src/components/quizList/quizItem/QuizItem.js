import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import classes from  '../QuizList.module.scss';

class QuizItem extends Component {
    detectMessageType = (quizType) => {
        switch (quizType) {
            case 'country':
                return `Try to do you best in simple country quiz. Your task to score max points, choosing right answers.
                The card includes country flag and 4 different answer variants. You will have 2 minutes to do your best. Be carefull only one variant is right. Good luck!`;
            case 'flag':
                return `Try to do you best in simple flag quiz. Your task to score max points, choosing right answers.
                The card includes country name and 4 different answer variants with flags. You will have 2 minutes to do your best. Be carefull only one variant is right. Good luck!`;
            case 'currency':
                return `Try to do you best in simple country quiz. Your task to score max points, choosing right answers.
                The card includes country currency and 4 different answer variants. You will have 2 minutes to do your best. Be carefull only one variant is right. Good luck!`;
            case 'area':
                return `Try to do you best in simple country quiz. Your task to score max points, choosing right answers.
                The card  includes country area and 4 different answer variants. You will have 2 minutes to do your best. Be carefull only one variant is right. Good luck!!`;
            default: break;    
        }
    }
    render() {
        const { quizType, changeState } = this.props;
        return (
            <Link to={`/${quizType}`} >
                <li className={classes.QuizItem} onClick={() => changeState('currentQuizType', quizType)}>
                    <h2>{quizType}</h2>
                    <div>{this.detectMessageType(quizType)}</div>
                </li>
            </Link>
        )
    }
}

export default withRouter(QuizItem);
