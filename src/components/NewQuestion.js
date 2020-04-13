import React from "react";
import '../App.css';
import { Card,Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from "./NavigationMenu";
import { Link } from "react-router-dom";

class NewQuestion extends React.Component {
  render() {
    return (
        <body id="custom">
            <NavigationMenu/>
            <div class="container newquestion-page">
                <Card className='card-question'>
                    <Card.Header className='card-header' >Create New Question</Card.Header>
                        <div class="card-body">
                            <h5 class="text-complete">Complete the question:</h5>
                            <p class="text-question"> Would you rather ...</p>
                            <Form.Group >
                                <Form.Control className='input' placeholder="Enter Option One Text Here" />
                                <Form.Control className='input' placeholder="Enter Option Two Text Here" />
                            </Form.Group>
                            <Link to="/">
                                <Button className='btn-signin'>Submit</Button>
                            </Link>
                        </div>
                </Card> 
            </div>
     </body>
    );
  }
}
export default NewQuestion;

