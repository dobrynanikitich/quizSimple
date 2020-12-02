import React, { Component } from 'react';

import classes from './Timer.module.scss';

class Timer extends Component {
    state = {
        count: 120,
    }
    componentDidMount() {
        let { count } = this.state;
        let { timeIsLeftHadler } = this.props;
        this.myInterval = setInterval(() => {
            this.setState((prevState) => ({
                count: prevState.count - 1,
            }), () => {
                if (this.state.count <= 0) {
                    timeIsLeftHadler();
                }
            })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.myInterval);
    }

    render() {
        let { count } = this.state;
        return (
            <div className={classes.TimerBlock}> 
                <h1>Time left: {count}</h1>
            </div>
        );
    }
}

export default Timer;