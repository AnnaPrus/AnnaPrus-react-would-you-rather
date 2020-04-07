import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import HomePage from './components/HomePage';
import LeaderBoard from './components/LeaderBoard';
import NewQuestion from './components/NewQuestion';
import LoginPage from './components/LoginPage';
import UnansweredQuestions from './components/UnansweredQuestions';
import AnsweredQuestions from './components/AnsweredQuestions';
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
            path="/aunnswered-question"
            render={() => (
              <UnansweredQuestions/>
            )}
          />
          
        </div>
    );
  }
  
  
}
export default WouldYouRatherApp;


