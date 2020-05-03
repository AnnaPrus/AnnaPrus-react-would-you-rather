import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { handleSetAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

class LoginPage extends React.Component {
  state = {
    redirectTo: false,
    selectedOption: "johndoe",
  };

  handleOnChange = (e) => {
    const optionValue = e.target.options[e.target.selectedIndex].id;
    this.setState((currentState) => ({
      selectedOption: optionValue,
    }));
  };

  handleLogin = (e) => {
    const { dispatch } = this.props;
    dispatch(handleSetAuthedUser(this.state.selectedOption));
  };

  render() {
    const { options } = this.props;
    return (
      <body id="custom">
        {console.log(this.state)}
        <div class="container login-page">
          <Card>
            <Card.Header className="card-header" as="h5">
              <p class="card-title">Welcome to the Would You Rather App!</p>
              <p class="card-text">Please sign in to continue</p>
            </Card.Header>
            <Card.Body>
              <h4 class="card-title text-signin">Sign In</h4>
              <div class="form-group">
                <label for="canbedeleted"> </label>

                <select
                  value={this.state.selectedOption}
                  onChange={this.handleOnChange}
                  class="form-control"
                >
                  {options.map((option) => (
                    <option
                      key={option.value}
                      id={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
                <br />
                <Button onClick={this.handleLogin} className="btn-signin">
                  Sign In
                </Button>
              </div>
            </Card.Body>
          </Card>
        </div>
      </body>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    options: Object.values(users).map((user) => {
      return { value: user.id, label: user.name };
    }),
  };
}

export default connect(mapStateToProps)(LoginPage);
