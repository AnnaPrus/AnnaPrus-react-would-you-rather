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
      <div id="custom">
        <nav className="navbar navbar-expand-lg   ">
          <div className="collapse navbar-collapse ml-5" id="navbar">
            <ul className="navbar-nav mr-auto">
              <Link to="/" exact="true">
                <li className="nav-item active">
                  <span className="nav-link">Home</span>
                </li>
              </Link>
              <Link to="/add">
                <li className="nav-item">
                  <span className="nav-link">New Question</span>
                </li>
              </Link>
              <Link to="/leaderboard">
                <li className="nav-item ">
                  <span className="nav-link">Leader Board</span>
                </li>
              </Link>
            </ul>
            <form className="form-inline mr-5 my-lg-0">
              <span className="mr-sm-5" aria-label="Search">
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
              </span>
            </form>
          </div>
        </nav>
        <div className="hr"></div>
      </div>
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
