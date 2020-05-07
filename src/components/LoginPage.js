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
      <div id="custom">
        {console.log(this.state)}
        <div className="container login-page">
          <Card>
            <Card.Header className="card-header" as="h5">
              <p className="card-title">Welcome to the Would You Rather App!</p>
              <p className="card-text">Please sign in to continue</p>
            </Card.Header>
            <Card.Body>
              <h4 className="card-title text-signin">Sign In</h4>
              <div className="form-group">
                <label htmlFor="canbedeleted"> </label>

                <select
                  value={this.state.selectedOption}
                  onChange={this.handleOnChange}
                  className="form-control"
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
      </div>
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
