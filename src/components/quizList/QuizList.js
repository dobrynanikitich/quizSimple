import React from 'react';
import { withRouter } from 'react-router-dom';

import QuizItem from './quizItem/QuizItem';

import classes from  './QuizList.module.scss';

const QuizList = ({ quizTypes, changeState }) => (
    <ul className={classes.QuizList}>
        {quizTypes.map(item => <QuizItem key={item} quizType={item} changeState={changeState}/>)}
    </ul>
);

export default withRouter(QuizList);
