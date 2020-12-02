import React from 'react';

import Button from '../button/Button';
import classes from './GameOverModal.module.scss';

const gameOver = ({ currentScore, returnToMainPageHandler }) => (
    <section className={classes.GameOverWrapper}>
        <div>Time is over</div>
        <div>You scored {currentScore} points</div>
        <Button click={() => returnToMainPageHandler()} buttonName={'playAgain'} />
    </section>
);

export default gameOver;