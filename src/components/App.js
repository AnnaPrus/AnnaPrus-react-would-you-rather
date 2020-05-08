import React, { Fragment } from "react";
import "../App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadingBar from "react-redux-loading";
import { connect } from "react-redux";
import HomePage from "./HomePage";
import PollDetails from "../components/PollDetails";
import LeaderBoard from "./LeaderBoard";
import NewQuestion from "./NewQuestion";
import LoginPage from "./LoginPage";
import ErrorPage from "./ErrorPage";
import { handleInitialData } from "../actions/shared";
import NavigationMenu from "./NavigationMenu";

class App extends React.Component {
  componentDidMount() {
    this.props.handleInitialData();
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <LoadingBar style={{ backgroundColor: "white", height: "3px" }} />
            <div>
              <NavigationMenu authedUser={this.props.authedUser} />

              {this.props.authed === true ? (
                <Fragment>
                  <Route path="/" component={LoginPage} />
                </Fragment>
              ) : (
                <Fragment>
                  <Switch>
                    <Route
                      path="/"
                      authedUser={this.props.authedUser}
                      exact
                      component={HomePage}
                    />
                    <Route
                      path="/questions/:id"
                      exact
                      component={PollDetails}
                    />
                    <Route path="/leaderboard" exact component={LeaderBoard} />
                    <Route path="/add" exact component={NewQuestion} />
                    <Route component={ErrorPage} />
                  </Switch>
                </Fragment>
              )}
            </div>
          </Fragment>
        </Router>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authed: authedUser === null,
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
