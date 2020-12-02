import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

import Header from  './components/header/Header';
import MyRouter from './components/MyRoute';

import { override, initialState } from './constants/constants';
import classes from './App.module.scss';

class App extends Component {
  state = initialState;

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = 'http://countryapi.gear.host/v1/Country/getCountries';
    fetch(proxyurl + url)
      .then(res => res.json())
      .then(context => this.setState({
        countriesList: context.Response,
        isLoading: false,
      }));
  }

  changeState = (prop, value) => {
    if (prop === 'initialState') {
      this.setState(initialState, () => {
        if (this.state.countriesList) {
          this.setState({ isLoading: false })
        }
      })
    } else {
      this.setState((prevState) => ({
        [prop]: value,
      }))
    }
  }

  render() {
    const { currentScore, currentQuizType, quizTypes, countriesList, isLoading, isLogin } = this.state;
    return (
      <Router>
        <div className={classes.AppWrapper}>
          <Header 
            score={currentScore}
            currentQuizType={currentQuizType}
            changeState={this.changeState}
            isLogin={isLogin}
          />
          {
            isLoading ? 
              (<ClipLoader
                css={override}
                size={450}
                color={"#123abc"}
                loading={isLoading}
              />) :       
              (<section className={classes.QuizBlock}>
                <MyRouter 
                  countriesList={countriesList}
                  changeState={this.changeState}
                  currentScore={currentScore}
                  currentQuizType={currentQuizType}
                  isLogin={isLogin}
                  quizTypes={quizTypes}
                />
              </section>)
          }
        </div>
      </Router>
    )
  }

}

export default App;
