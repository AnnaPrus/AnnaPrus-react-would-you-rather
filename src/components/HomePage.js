import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PollResultsList from "../components/PollResultsList";
import PollList from "../components/PollList";
import { connect } from "react-redux";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

class HomePage extends React.Component {
  state = {
    activeTab: "1",
  };

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  render() {
    return (
      <div id="custom">
        <div className="container">
          <div className="card card-home-big">
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "1",
                  })}
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Unanswered
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === "2",
                  })}
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Answered
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane className="center" tabId="1">
                <PollList
                  key="unansweredQuestions"
                  questions={this.props.unansweredQuestions}
                />
              </TabPane>
              <TabPane className="center" tabId="2">
                <PollList
                  key="answeredQuestions"
                  questions={this.props.answeredQuestions}
                />
                )
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser, questions }) {
  const userAnswers = users[authedUser].answers;
  return {
    answeredQuestions: Object.values(questions)
      .filter((question) => {
        return Object.keys(userAnswers).includes(question.id);
      })
      .sort((a, b) => b.timestamp - a.timestamp),
    unansweredQuestions: Object.values(questions)
      .filter((question) => {
        return !Object.keys(userAnswers).includes(question.id);
      })
      .sort((a, b) => b.timestamp - a.timestamp),
  };
}

export default connect(mapStateToProps)(HomePage);
