import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from "./NavigationMenu";
import QuestionItem from "./QuestionItem";
//import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    componentDidMount() {
  
    }

    render() {
    const { users } = this.props;

    return (
    <body id="custom">
            <NavigationMenu/>
            <div className='container'>
                <div class="card card-home-big">
                <ul class="nav nav-pills nav-fill .nav-justified">
                    <li class="nav-item">
                        <Link class="nav-link" to="/" >Unanswered questions</Link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ">Answered questions</a>
                    </li>
                </ul>
                    <QuestionItem/>
                    <QuestionItem/>
                    <QuestionItem/>

                </div>
            </div>
        </body>
    );
    }
}
export default HomePage;
