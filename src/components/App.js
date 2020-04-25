import React from "react";
import "../App.css";
import * as _DATA from "../utils/_DATA";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import LoginPage from "./LoginPage";
import AnsweredQuestions from "./AnsweredQuestions";
import QuestionDetailUnanswered from "./QuestionDetailUnanswered";
import QuestionDetailAnswered from "./QuestionDetailAnswered";
import ErrorPage from "./ErrorPage";
import { handleInitialData } from "../actions/shared";
import { connect } from "react-redux";

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <div>
        <Route exact path="/login" render={() => <LoginPage />} />
        <Route exact path="/" render={() => <HomePage />} />
        <Route exact path="/leaderboard" render={() => <LeaderBoard />} />
        <Route exact path="/newquestion" render={() => <NewQuestion />} />
        <Route
          exact
          path="/answered-questions"
          render={() => <AnsweredQuestions />}
        />
        <Route
          exact
          path="/questiondetailunanswered"
          render={() => <QuestionDetailUnanswered />}
        />
        <Route
          exact
          path="/questiondetailanswered"
          render={() => <QuestionDetailAnswered />}
        />
        <Route exact path="/error" render={() => <ErrorPage />} />
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleInitialData: () => {
      dispatch(handleInitialData());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
