import React from 'react';
import { Route } from 'react-router-dom';

import QuizList from './quizList/QuizList';
import ActualQuizGame from './actualQuizGame/ActualQuizGame';
import AuthGoogle from './modals/AuthGoogle';

const myRouter = ({ countriesList, changeState, currentScore, currentQuizType, isLogin, quizTypes }) => {
    const quizToRender = isLogin ? (
        <ActualQuizGame 
            countriesList={countriesList}
            changeState={changeState}
            currentScore={currentScore}
            currentQuizType={currentQuizType}
            isLogin={isLogin}
        />
    ) : (
        <AuthGoogle 
            changeState={changeState}
            isLogin={isLogin}
        />
    );

    return (
        <>
            <Route path={`/`} exact render={() => <QuizList quizTypes={quizTypes} changeState={changeState}/>} />
            <Route path={`/country`} render={() => quizToRender} />
            <Route path={`/flag`} render={() => quizToRender} />
            <Route path={`/currency`} render={() => quizToRender} />
            <Route path={`/area`} render={() => quizToRender} />
        </>
    )
}

export default myRouter;
