import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { handleSaveAnswer } from "../actions/shared";
import ErrorPage from "../components/ErrorPage";
import { Button, Card } from "react-bootstrap";

class PollDetails extends Component {
  state = {
    option: "",
  };

  handleChange = (event) => {
    this.setState({
      option: event.target.value,
    });
  };

  handleVote = (event) => {
    const { dispatch, authedUser, pollId } = this.props;
    const answer = this.state.option;
    const qid = pollId;
    dispatch(handleSaveAnswer({ authedUser, qid, answer }));
  };

  handleSetChoice = () => {
    const { userAnswer } = this.props;
    if (userAnswer !== null) {
      this.setState({
        option: this.props.userAnswer,
      });
    }
  };

  componentDidMount() {
    this.handleSetChoice();
  }

  render() {
    const { user, question, isInvalid } = this.props;
    return (
      <div id="custom" class="container ">
        <div className=" card-question-center">
          <Card className="card-question ">
            {isInvalid === false ? (
              <div className="poll-card">
                <Card.Header as="h5">
                  <h4>{user.name} asks:</h4>
                </Card.Header>
                <div class="card-body container-cards">
                  <div className="">
                    <img
                      className="poll-card-avatar"
                      alt={user.avatarURL}
                      src={user.avatarURL}
                    />
                  </div>
                  <div class="separator-vert"></div>
                  <div className="right">
                    <b>Would You Rather...</b>
                    <br />
                    <br />
                    <form>
                      <input
                        type="radio"
                        checked={this.state.option === "optionOne"}
                        name="options"
                        value="optionOne"
                        onChange={this.handleChange}
                      />{" "}
                      {question.optionOne.text}
                      <br />
                      <input
                        type="radio"
                        checked={this.state.option === "optionTwo"}
                        name="options"
                        value="optionTwo"
                        onChange={this.handleChange}
                      />{" "}
                      {question.optionTwo.text}
                      <br />
                      <br />
                    </form>
                  </div>
                </div>
                <Button className="btn-view-poll">
                  <Link
                    className="sign-in-button"
                    to={`/results/${this.props.pollId}`}
                  >
                    <div onClick={this.handleVote} class="text-view-poll">
                      Submit
                    </div>
                  </Link>
                </Button>
              </div>
            ) : (
              <ErrorPage />
            )}
            <br />
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

  const userAnswer = users[authedUser].answers[id];
  return {
    pollId: id,
    question,
    user: users[question.author],
    authedUser,
    userAnswer,
    isInvalid: false,
  };
}

export default connect(mapStateToProps)(PollDetails);
