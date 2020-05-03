import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";

class LeaderBoard extends React.Component {
  render() {
    const { leaders } = this.props;
    return (
      <body id="custom">
        <div class="container leaderboard-page">
          <h3>Leaderboard</h3>
          <Card className="card-body">
            {console.log(this.props)}
            {leaders.map((user, index) => (
              <div className="leaderboard-page">
                <Card>
                  <div key={user.leaderId} className=" ">
                    <Card.Header>
                      <h4>{user.leaderName} asks:</h4>
                    </Card.Header>
                    <Card.Body>
                      <div className="container-cards">
                        <div className="left">
                          <img
                            className="poll-card-avatar "
                            alt={user.avatarURL}
                            src={user.avatarURL}
                          />
                        </div>
                        <div class="separator-vert"></div>
                        <div className="container-info">
                          <h5>Score: {user.score}</h5>
                          <p>Answered Questions: {user.answered}</p>
                          <p>Created Questions: {user.questions}</p>

                          <p className="truncate center"></p>
                        </div>
                      </div>
                    </Card.Body>
                  </div>
                </Card>
                <br />
              </div>
            ))}
          </Card>
        </div>
      </body>
    );
  }
}
function mapStateToProps({ questions, users }) {
  const leaders = Object.keys(users).map((userId) => ({
    name: users[userId].name,
    leaderId: userId,
    leaderName: users[userId].name,
    avatarURL: users[userId].avatarURL,
    score:
      Object.keys(users[userId].answers).length +
      Object.keys(users[userId].questions).length,
    answered: Object.keys(users[userId].answers).length,
    questions: Object.keys(users[userId].questions).length,
  }));

  return {
    questions: Object.values(questions),
    leaders: leaders.sort(
      (a, b) => b.answered + b.questions - (a.answered + a.questions)
    ),
  };
}

export default connect(mapStateToProps)(LeaderBoard);
