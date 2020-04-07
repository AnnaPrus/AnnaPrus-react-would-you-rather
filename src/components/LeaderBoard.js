import React from "react";
import { Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from "./NavigationMenu";
import girl from '../images/girl.png';

class LeaderBoard extends React.Component {
  render() {
    return (
        <body id="custom">
            <NavigationMenu/>
            <div class="container">
                <Card >
                    <Card.Body>
                        <div class="container-cards"> 
                            <div class="container-col-small">
                                <img class="avatar" src={girl}  alt="avatar" />
                            </div>
                            <div class="separator-vert"></div>
                            <div class="container-col-big">
                                <Card.Title >Anja Prus</Card.Title>
                                <p class="text-card-info">Unswered questions</p>
                                <p class="text-card-info">Created questions</p>
                            </div>
                            <div class="separator-vert"></div>
                            <div class="score-box container-col-small">
                                <div class="">

                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>  
            </div>
     </body>
    );
  }
}
export default LeaderBoard;
