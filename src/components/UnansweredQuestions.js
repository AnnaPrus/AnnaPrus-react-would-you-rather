import React from "react";
import '../App.css';
import {Nav, Button, Card, Text} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import girl from '../images/girl.png';
import { Link } from "react-router-dom";

class UnansweredQuestions extends React.Component {
  render() {
    return (
        <body id="custom">
        <div class="container answered-page">
            <div class="card-header-home" >
                <Card>
                    <Card.Header as="h5">Anja Prus asks:</Card.Header>
                    <div class="container-cards"> 
                        <div class="image-box">
                            <img class="avatar" src={girl}  alt="avatar" />
                        </div>
                        <div class="separator-vert"></div>
                        <div class="container-info">
                            <div class="text-first-line"><p>Would you rather</p></div>
                            <div class="text-second-line"><p>...write JavaScript...</p></div>
                            <Link className='btn-view-poll' to="/questiondetailunanswered">
                                <Button className='btn-view-poll'>View Poll</Button>
                            </Link>
                        </div>
                    </div>
                </Card>  
            </div> 
        </div> 
     </body>
    );
  }
}
export default UnansweredQuestions;