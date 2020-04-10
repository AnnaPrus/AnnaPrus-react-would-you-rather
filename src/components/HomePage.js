import React from "react";
import '../App.css';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from "./NavigationMenu";
import AnsweredQuestions from "./AnsweredQuestions";
import UnansweredQuestions from "./UnansweredQuestions";

class HomePage extends React.Component {
  render() {
    return (
    <body id="custom">
           <NavigationMenu/>
            <div className='container'>
                <div class="card card-home-big">
                    <Nav justify variant="tabs">
                        <Nav.Item>
                            <Nav.Link >Unanswered questions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link >Ansswered questions</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <UnansweredQuestions/>
                </div>
            </div>
     </body>
    );
  }
}
export default HomePage;
