import React from "react";
import '../App.css';
import { Button, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import girl from '../images/girl.png';
import { Link } from "react-router-dom";

class QuestionItem extends React.Component {
constructor(props) {
    super(props);
}

render() {
    const {user} = this.props; 
    
    return (
        <div id="custom" class="container answered-page">
            <div class="card-header-home" >
                <Card>
                    <Card.Header as="h5">{user} asks:</Card.Header>
                    <div class="container-cards"> 
                        <div class="image-box">
                            <img class="avatar" src={girl}  alt="avatar" />
                        </div>
                        <div class="separator-vert"></div>
                        <div class="container-info">
                            <div class="text-first-line"><p>Would you rather</p></div>
                            <div class="text-second-line"><p>...write JavaScript...</p></div>
                            <Button className='btn-view-poll'>
                                <Link  to="/questiondetailunanswered">
                                <div class="text-view-poll">View Poll</div>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </Card>  
            </div> 
        </div> 
    );
  }
}
export default QuestionItem; 