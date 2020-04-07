import React from "react";
import { Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg';
import NavigationMenu from '../components/NavigationMenu.js';

class LoginPage extends React.Component {
  render() {
    return (
        <body id="custom">
            <NavigationMenu/>
            <div className='container'>
                <div>
                    <Card >
                        <Card.Header className='who-header' as="h5">
                            <h4 class="card-title card-title-login">Welcome to the Would You Rather App!</h4>
                            <p class="card-text">Please sign in to continue</p>
                        </Card.Header>
                        <Card.Body>
                        <div className="App-logo">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                        <h4 class="card-title text-signin">Sing In</h4>
                        <div class="form-group">
                            <label for="exampleFormControlSelect1"> </label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>Anja Prus</option>
                                <option>Mike Ferron</option>
                                <option>Alex Marcel</option>
                            </select>
                        </div>
                        <Button className='btn-signin'>Sing In</Button>
                        </Card.Body>
                    </Card>  
                </div>
            </div>
     </body>
    );
  }
}
export default LoginPage;

