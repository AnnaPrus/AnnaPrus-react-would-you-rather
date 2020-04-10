import React from "react";
import { Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg';
import NavigationMenu from '../components/NavigationMenu.js';

class LoginPage extends React.Component {
  render() {
    const { users } = this.props;
    return (
        <body id="custom">
            <NavigationMenu/>
            <div class="container login-page">
                <Card >
                    <Card.Header className='card-header' as="h5">
                        <p class="card-title">Welcome to the Would You Rather App!</p>
                        <p class="card-text">Please sign in to continue</p>
                    </Card.Header>
                    <Card.Body>
                    <div className="app-logo">
                        <img />
                    </div>
                    <h4 class="card-title text-signin">Sign In</h4>
                    <div class="form-group">
                        <label for="canbedeleted"> </label>
                        <select class="form-control">
                            <option>Anja Prus</option>
                            <option>Mike Ferron</option>
                            <option>Alex Marcel</option>
                        </select>
                    </div>
                    <Button className='btn-signin'>Sign In</Button>
                    </Card.Body>
                </Card>  
             </div>
     </body>
    );
  }
}
export default LoginPage;

