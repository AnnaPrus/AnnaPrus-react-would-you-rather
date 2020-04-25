import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationMenu from "./NavigationMenu";
import QuestionItem from "./QuestionItem";
import { Link } from "react-router-dom";
import { receiveUsers } from "../actions";
import * as _DATA from "../utils/_DATA";
import { connect } from "react-redux";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col,
} from "reactstrap";
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
    const { unansweredQuestions, answeredQuestions, authedUser } = this.props;
    // console.log("current user from home: ", authedUser);
    console.log("answeredQuestions: ", answeredQuestions);
    return (
      <div id="custom">
        <NavigationMenu />
        <div className="container">
          <div class="card card-home-big">
            {/* <ul class="nav nav-pills nav-fill .nav-justified">
                        <li class="nav-item">
                            <Link 
                                class="nav-link" 
                                to="/" >
                                Unanswered questions
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link 
                                class="nav-link" 
                                to="/answered-questions" >
                                Answered questions
                            </Link>
                        </li>
                    </ul>  */}
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
              <TabPane tabId="1">
                <Row>
                  {unansweredQuestions.map((qid) => (
                    <QuestionItem id={qid} />
                  ))}
                </Row>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  {answeredQuestions.map((qid) => (
                    <QuestionItem id={qid} />
                  ))}
                </Row>
              </TabPane>
            </TabContent>
            {/* {
              Object.keys(users).map((id) => <QuestionItem key={id} user = {users[id].name}></QuestionItem>)
            }   */}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users, authedUser, questions }) {
  console.log("current authedUser ls: ", authedUser);
  console.log("answers from home", users[Object.keys(users)[0]].answers);
  console.log("questions from home: ", questions);

  //   const answeredQuestions = Object.keys(user.answers).sort(
  //     (a, b) => questions[b] - questions[a]
  //   );
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
