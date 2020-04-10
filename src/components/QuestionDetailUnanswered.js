import React from "react";
import '../App.css';
import {Nav, Button, Card, Text} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import girl from '../images/girl.png';
import NavigationMenu from './NavigationMenu.js';
import { Link } from "react-router-dom";


class QuestionDetailUnanswered extends React.Component {
  render() {
    return (
    <body id="custom">
        <NavigationMenu/>
        <div class="container details-page">
        
                <Card>
                    <Card.Header as="h5">Anja Prus asks:</Card.Header>
                    <div class="container-cards"> 
                        <div class="image-box">
                            <img class="avatar" src={girl}  alt="avatar" />
                        </div>
                        <div class="separator-vert"></div>
                        <div class="container-info">
                            <div class="text-first-line"><p>Would you rather</p></div>
                            <div class="form-check check-box">
                                <input class="form-check-input" type="radio" />
                                <label class="form-check-label">
                                    Java Script
                                </label>
                            </div>
                            <div class="form-check check-box">
                                <input class="form-check-input" type="radio" />
                                <label class="form-check-label">
                                    C#
                                </label>
                            </div>
                            <Link to="/questiondetailanswered">
                                <Button id="button-details-view">Submit</Button>
                            </Link>
                        </div>
                    </div>
                </Card>  
            </div> 
     </body>
    );
  }
}
export default QuestionDetailUnanswered;