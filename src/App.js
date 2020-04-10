import React from 'react';
import './App.css';
import * as _DATA from "./_DATA";
import { Route } from "react-router-dom";
import HomePage from './components/HomePage';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import LoginPage from './components/LoginPage';
import UnansweredQuestions from './components/QuestionItem';
import AnsweredQuestions from './components/AnsweredQuestions';
import QuestionDetailUnanswered from './components/QuestionDetailUnanswered';
import QuestionDetailAnswered from './components/QuestionDetailAnswered';
import ErrorPage from './components/ErrorPage';
import { connect } from "react-redux";

class WouldYouRatherApp extends React.Component {
  state = {
    users: [],
    };

  componentDidMount() {
  _DATA._getUsers().then(users => {
      console.log("users: ", users);
      this.setState({ users });
  });
  }
  render() {
    return (
        <div>
          <Route
            exact
            path="/login"
            render={() => (
              <LoginPage 
                users={this.state.users}
              />
            )}
          />
          <Route
            exact
            path="/home"
            render={() => (
              <HomePage/>
            )}
          />
          <Route
            exact
            path="/leaderboard"
            render={() => (
              <LeaderBoard/>
            )}
          />
          <Route
            exact
            path="/newquestion"
            render={() => (
              <NewQuestion/>
            )}
          />
          <Route
            exact
            path="/answered-questions"
            render={() => (
              <AnsweredQuestions/>
            )}
          />
           <Route
            exact
            path="/unanswered-questions"
            render={() => (
              <HomePage/>
            )}
          />
          <Route
            exact
            path="/questiondetailunanswered"
            render={() => (
              <QuestionDetailUnanswered/>
            )}
          />
          <Route
            exact
            path="/questiondetailanswered"
            render={() => (
              <QuestionDetailAnswered/>
            )}
          />
          <Route
            exact
            path="/error"
            render={() => (
              <ErrorPage/>
            )}
          />
        </div>
    );
  }
  
  
}
export default WouldYouRatherApp;


