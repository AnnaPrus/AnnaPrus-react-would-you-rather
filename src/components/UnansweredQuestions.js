import React from "react";
import '../App.css';
import {Nav, Button, Card, Text} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg';

class UnansweredQuestions extends React.Component {
  render() {
    return (
    <body id="custom">
        <div class=".card-header-home" >
            <Card className='card-home'>
                <Card.Header className='who-header' as="h5">Anja Prus asks:</Card.Header>
                    <div class="container-cards"> 
                        <div  >
                            <img class="avatar" src={logo}  alt="avatar" />
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
                
     </body>
    );
  }
}
export default UnansweredQuestions;