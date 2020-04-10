import React from "react";
import { Nav, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationMenu extends React.Component {
  render() {
    return (
        <body id="custom">
           
            <nav class="navbar navbar-expand-lg   ">
                <div class="collapse navbar-collapse ml-5" id="navbar">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active" >
                            <a class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">New Question</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link">Leader Board</a>
                        </li>
                    </ul>
                    <form class="form-inline mr-5 my-lg-0">
                        <text class="mr-sm-5" aria-label="Search"> Hello, Anja Prus </text>
                        <button class="btn my-sm-0">Logout</button>
                    </form>
                </div>
            </nav>
            <div class="hr"></div>
        </body>
   );
  }
}
export default NavigationMenu;

