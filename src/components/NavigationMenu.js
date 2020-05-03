import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { handleSetAuthedUser } from "../actions/authedUser";

class NavigationMenu extends React.Component {
  handleLogout = (e) => {
    const { dispatch } = this.props;
    dispatch(handleSetAuthedUser(null));
  };

  render() {
    const { user } = this.props;
    return (
      <body id="custom">
        <nav class="navbar navbar-expand-lg   ">
          <div class="collapse navbar-collapse ml-5" id="navbar">
            <ul class="navbar-nav mr-auto">
              <Link to="/" exact>
                <li class="nav-item active">
                  <a class="nav-link">Home</a>
                </li>
              </Link>
              <Link to="/add">
                <li class="nav-item">
                  <a class="nav-link">New Question</a>
                </li>
              </Link>
              <Link to="/leaderboard">
                <li class="nav-item ">
                  <a class="nav-link">Leader Board</a>
                </li>
              </Link>
            </ul>
            <form class="form-inline mr-5 my-lg-0">
              <text class="mr-sm-5" aria-label="Search">
                {typeof user === "undefined" ? (
                  <div>
                    <Link to="/" className="prompt-button">
                      Please log in
                    </Link>
                  </div>
                ) : (
                  <div>
                    <img
                      className="img-avatar"
                      alt={user.id}
                      src={user.avatarURL}
                    />
                    <span className="user-name">{user.name}</span>
                    &nbsp;
                    <button className="btn my-sm-0" onClick={this.handleLogout}>
                      Log Out
                    </button>
                  </div>
                )}
              </text>
            </form>
          </div>
        </nav>
        <div class="hr"></div>
      </body>
    );
  }
}

function mapStateToProps({ users }, { authedUser }) {
  const user = users[authedUser];
  return {
    user,
  };
}

export default connect(mapStateToProps)(NavigationMenu);
