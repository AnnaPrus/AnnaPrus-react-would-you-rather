import React, { Component } from "react";
import { Line } from "rc-progress";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

class PollResultsList extends Component {
  render() {
    const { user, question, totalVotes, yourAnswer } = this.props;
    return (
      <div id="custom">
        <div class="card-header-home">
          <Card>
            {console.log(this.props)}

            <Card.Header as="h5">
              <h4>Results by {user.name} </h4>
            </Card.Header>
            <div className=" container ">
              <div className="left padding">
                <img
                  className="poll-card-avatar"
                  alt={user.avatarURL}
                  src={user.avatarURL}
                />
              </div>
              <div className="unanswered-page">
                <p>Would You Rather...</p>

                <div className="">
                  <Card>
                    <div className="padding">
                      {question.optionOne.text}&nbsp;
                      {yourAnswer[0][1] === "optionOne" ? (
                        <span>(your choice)</span>
                      ) : null}
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
                    </div>
                  </Card>

                  <br />
                  <Card>
                    <div className="padding">
                      {question.optionTwo.text}&nbsp;
                      {yourAnswer[0][1] === "optionTwo" ? (
                        <span>(your choice)</span>
                      ) : null}
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
                    </div>
                  </Card>
                </div>
              </div>
            </div>
            <br />
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, props) {
  const { id } = props;
  const question = questions[id];
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
  };
}

export default connect(mapStateToProps)(PollResultsList);
