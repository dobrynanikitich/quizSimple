import React from 'react';

import classes from './Button.module.scss';
import classNames from 'classnames/bind';

let cx = classNames.bind(classes);

const nextQuestionBtn = ({ click, buttonName }) => {
    let className = cx({
        Next: buttonName === 'next',
        Back: buttonName === 'refresh',
        PlayAgain: buttonName === 'playAgain'
    });
    return (
        <button className={className} onClick={click}>
            {buttonName}
        </button>
    );
}

export default nextQuestionBtn;