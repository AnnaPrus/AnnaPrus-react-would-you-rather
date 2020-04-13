import React from "react";
import { Link } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationMenu extends React.Component {
  render() {
    return (
        <body id="custom">
           
            <nav class="navbar navbar-expand-lg   ">
                <div class="collapse navbar-collapse ml-5" id="navbar">
                    <ul class="navbar-nav mr-auto">
                        <Link to="/">
                            <li class="nav-item active" >
                                <a class="nav-link">Home</a>
                            </li>
                        </Link>
                        <Link to="/newquestion">
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
                        <text class="mr-sm-5" aria-label="Search"> Hello, Anja Prus </text>
                        <Link  to="/login">
                            <button class="btn my-sm-0">Logout</button>
                        </Link>
                    </form>
                </div>
            </nav>
            <div class="hr"></div>
        </body>
   );
  }
}
export default NavigationMenu;

