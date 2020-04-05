import React from "react";
import '../App.css';
import {Nav, Button, Card, Text} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg';
import NavigationMenu from "./NavigationMenu";
import AnsweredQuestions from "./AnsweredQuestions";
//import logo from './logo.svg';
//import judo_penguine from '../images/judo_penguine.svg'


class HomePage extends React.Component {
  render() {
    return (
    <body id="custom">
           <NavigationMenu/>
            <div className='container'>
                <div class="card card-home-big">
                    <Nav justify variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Unanswered questions</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Ansswered questions</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <AnsweredQuestions/>
                </div>
            </div>
     </body>
    );
  }
}
export default HomePage;
