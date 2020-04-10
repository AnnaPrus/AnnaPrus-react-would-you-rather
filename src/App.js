import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import HomePage from './components/HomePage';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import LoginPage from './components/LoginPage';
import UnansweredQuestions from './components/UnansweredQuestions';
import AnsweredQuestions from './components/AnsweredQuestions';
import QuestionDetailUnanswered from './components/QuestionDetailUnanswered';
import QuestionDetailAnswered from './components/QuestionDetailAnswered';
import ErrorPage from './components/ErrorPage';

class WouldYouRatherApp extends React.Component {
  render() {
    return (
        <div>
          <Route
            exact
            path="/login"
            render={() => (
              <LoginPage/>
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
            path="/answered-question"
            render={() => (
              <AnsweredQuestions/>
            )}
          />
           <Route
            exact
            path="/unanswered-question"
            render={() => (
              <UnansweredQuestions/>
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


