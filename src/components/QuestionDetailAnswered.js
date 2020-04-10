import React from "react";
import '../App.css';
import {Nav, Button, Card, Text} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import girl from '../images/girl.png';
import NavigationMenu from './NavigationMenu.js';


class QuestionDetailUnanswered extends React.Component {
  render() {
    return (
    <body id="custom">
        <NavigationMenu/>
        <div class="container details-page-answered">
                <Card>
                    <Card.Header as="h5">Anja Prus asks:</Card.Header>
                    <div class="container-cards"> 
                        <div class="image-box">
                            <img class="avatar" src={girl}  alt="avatar" />
                        </div>
                        <div class="separator-vert"></div>
                        <div class="container-info">
                            <div class="text-first-line"><h3>Results</h3></div>
                            <Card className='card-result'>
                                <p>Would you rather be a Java Script developer?</p>
                                <p>1 out of 3 votes</p>
                            </Card>
                            <Card className='card-result'>
                                <p>Im the world where you can be anything would you be kind?</p>
                                <p>1 out of 2 votes</p>
                            </Card>
                        </div>
                    </div>
                </Card>  
            </div> 
     </body>
    );
  }
}
export default QuestionDetailUnanswered;