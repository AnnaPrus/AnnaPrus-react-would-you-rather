import React from "react";
import "../App.css";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { handleAddQuestion } from "../actions/shared";
import { connect } from "react-redux";

class NewQuestion extends React.Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };

  handleOptionOne = (event) => {
    this.setState({
      optionOne: event.target.value,
    });
  };

  handleOptionTwo = (event) => {
    this.setState({
      optionTwo: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { optionOne, optionTwo } = this.state;
    const { dispatch, authedUser } = this.props;
    dispatch(handleAddQuestion(optionOne, optionTwo, authedUser));
    this.props.history.push("/");
  };
  render() {
    return (
      <body id="custom">
        <div class="container newquestion-page">
          <Card className="card-question">
            <Card.Header className="card-header">
              Create New Question
            </Card.Header>
            <div class="card-body">
              <h5 class="text-complete">Complete the question:</h5>
              <p class="text-question"> Would you rather ...</p>
              <Form.Group>
                <Form.Group>
                  <Form.Control
                    className="input"
                    placeholder="Enter Option One Text Here"
                    value={this.state.optionOne}
                    type="text"
                    className="input-options"
                    onChange={this.handleOptionOne}
                  />
                  <div className="text-or padding">OR</div>

                  <Form.Control
                    className="input"
                    placeholder="Enter Option Two Text Here"
                    value={this.state.optionTwo}
                    type="text"
                    className="input-options"
                    onChange={this.handleOptionTwo}
                  />
                </Form.Group>
              </Form.Group>
              <Button className="btn-signin" onClick={this.handleSubmit}>
                Submit
              </Button>
            </div>
          </Card>
        </div>
      </body>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NewQuestion);
