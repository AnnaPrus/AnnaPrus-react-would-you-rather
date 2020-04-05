import React from "react";
import '../App.css';
import { Card,Form, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from "./NavigationMenu";

class NewQuestion extends React.Component {
  render() {
    return (
        <body id="custom">
            <NavigationMenu/>
            <div class="container">
            <Card className='card-que'>
                <Card.Header className='who-header' as="h5">Create New Question</Card.Header>
                    <div class="container-cards"> 
                        <div class="card-body">
                            <h5 class="text-complete" >Complete the question:</h5>
                            <p class="text-question"> Would you rather ...</p>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control className='input' type="email" placeholder="Enter Option One Text Here" />
                                <Form.Control type="email" placeholder="Enter Option Two Text Here" />
                            </Form.Group>

                            <Button className='btn-signin'>Submit</Button>
                        </div>
                    </div>
            </Card> 
            </div>
     </body>
    );
  }
}
export default NewQuestion;

