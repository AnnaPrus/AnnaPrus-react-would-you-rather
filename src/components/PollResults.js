import React, { Component } from "react";
import { Line } from "rc-progress";
import { connect } from "react-redux";
import ErrorPage from "../components/ErrorPage";
import { Card } from "react-bootstrap";

class PollResults extends Component {
  render() {
    const { user, question, totalVotes, yourAnswer, isInvalid } = this.props;
    return (
      <div id="custom">
        <div className="card-header-home container">
          <Card className="card-question">
            <div className="">
              {isInvalid === false ? (
                <div className="poll-card">
                  <Card.Header as="h5">
                    <h4>Results by {user.name} </h4>
                  </Card.Header>
                  <div className=" padding ">
                    <div className="left padding">
                      <img
                        className="poll-card-avatar"
                        alt={user.avatarURL}
                        src={user.avatarURL}
                      />
                    </div>
                    <div className="right">
                      <b>Would You Rather...</b>
                      <br />
                      <br />
                      <Card className="padding">
                        {question.optionOne.text}&nbsp;
                        {yourAnswer[0][1] === "optionOne" ? (
                          <span>(your choice)</span>
                        ) : null}
                        <br />
                        <Line
                          percent={
                            (question.optionOne.votes.length / totalVotes) * 100
                          }
                          strokeWidth="2"
                          strokeColor="#6fc2f5"
                        />
                        (
                        {`${question.optionOne.votes.length} / ${totalVotes} votes`}
                        )
                        <br />
                      </Card>
                      <br />
                      <Card className="padding">
                        {question.optionTwo.text}&nbsp;
                        {yourAnswer[0][1] === "optionTwo" ? (
                          <span>(your choice)</span>
                        ) : null}
                        <br />
                        <Line
                          percent={
                            (question.optionTwo.votes.length / totalVotes) * 100
                          }
                          strokeWidth="2"
                          strokeColor="#6fc2f5"
                        />
                        (
                        {`${question.optionTwo.votes.length} / ${totalVotes} votes`}
                        )
                        <br />
                      </Card>
                    </div>
                  </div>
                </div>
              ) : (
                <ErrorPage />
              )}
              <br />
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  if (typeof question === "undefined") {
    return {
      isInvalid: true,
      user: "",
      question: "",
    };
  }

  const totalVotes =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const userAnswers = users[authedUser].answers;
  return {
    pollId: id,
    question,
    user: users[question.author],
    yourAnswer: Object.entries(userAnswers).filter((answer) => {
      return answer[0] === id;
    }),
    totalVotes,
    isInvalid: false,
  };
}

export default connect(mapStateToProps)(PollResults);
