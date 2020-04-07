import React from "react";
import '../App.css';
import {Nav, Button, Card, Text} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import judo_penguin from '../images/judo_penguin.svg';
import NavigationMenu from "./NavigationMenu";

class AnsweredQuestions extends React.Component {
  render() {
    return (
    <body id="custom">
        <NavigationMenu/>
        <div class="container">
            <div class="card-header-home" >
                <Card >
                    <Card.Header className='who-header' as="h5">Anja Prus asks:</Card.Header>
                    <div class="container-cards"> 
                        <div>
                            <img class="avatar" src={judo_penguin}  alt="avatar" />
                        </div>
                        <div class="separator-vert"></div>
                        <div class="container-info">
                            <Card.Title>Would you rather</Card.Title>
                            <Card.Text>
                            ...write JavaScript...
                            </Card.Text>
                            <Button className='login-btn'>View Poll</Button>
                        </div>
                    </div>
                </Card>  
            </div> 
        </div> 
     </body>
    );
  }
}
export default AnsweredQuestions;