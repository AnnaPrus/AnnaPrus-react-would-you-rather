import React from "react";
import '../styles/HomePage.css';
import { Nav, Button} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationMenu extends React.Component {
  render() {
    return (
        <body id="custom">
            <Nav className='menu' variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">New Question</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled"> Leader Board</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <p class="text-hello">Hello, Anja Prus</p>
                </Nav.Item>
                <Nav.Item>
                    <Button className='btn-logout'>Logout</Button>
                </Nav.Item>
            </Nav>
            <div class="hr"></div>
        </body>
   );
  }
}
export default NavigationMenu;