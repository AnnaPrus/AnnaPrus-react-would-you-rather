import React from 'react';
import '../App.css';
import * as _DATA from "../utils/_DATA";
import { Route } from "react-router-dom";
import HomePage from './HomePage';
import LeaderBoard from './LeaderBoard';
import NewQuestion from './NewQuestion';
import LoginPage from './LoginPage';
import AnsweredQuestions from './AnsweredQuestions';
import QuestionDetailUnanswered from './QuestionDetailUnanswered';
import QuestionDetailAnswered from './QuestionDetailAnswered';
import ErrorPage from './ErrorPage';
import { handleInitialData }  from '../actions/shared'
import { connect } from "react-redux";

class App extends React.Component {
  
  componentDidMount() {
   // const AUTHED_ID = null;
    //this.props.handleInitialData()
    this.props.dispatch((handleInitialData()))

  }

  render() {
   // const {users} = this.props
  // console.log("hehe33", Object.keys(users).map((id) =>  users[id].name))
    return (
        <div>
          <Route
            exact
            path="/login"
            render={() => (
              <LoginPage 
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <HomePage
              />
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

function mapStateToProps ({ users, questions }) {
  console.log("users from log",users)
  return {
    users, 
    questions
  }
}


export default connect(  mapStateToProps)(App);


