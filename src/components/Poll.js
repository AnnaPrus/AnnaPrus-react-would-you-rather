import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button, Card } from "react-bootstrap";

class Poll extends Component {
  render() {
    const { question, user, id } = this.props;
    return (
      <div id="custom" className="container unanswered-page">
        <div className="card-header-home">
          <Card>
            <div className="card-poll">
              <div className="">
                <Card.Header as="h5">
                  <p>{user.name} asks:</p>
                </Card.Header>
              </div>

              <div className="container-cards padding">
                <img
                  className="poll-card-avatar"
                  alt={user.avatarURL}
                  src={user.avatarURL}
                />
              </div>
              <div className="text-first-line">
                <p>Would you rather</p>

                <h3 className="text-second-line">{question.optionOne.text}</h3>
              </div>
              <Button className="btn-view-poll">
                <Link className="sign-in-button" to={`/questions/${id}`}>
                  <div className="text-view-poll">View poll</div>
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const user = users[question.author];
  return {
    question,
    user,
  };
}

export default connect(mapStateToProps)(Poll);
