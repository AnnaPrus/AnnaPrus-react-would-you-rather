import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from "./NavigationMenu";
import QuestionItem from "./QuestionItem";
import { Link } from "react-router-dom";
import {receiveUsers} from "../actions";
import * as _DATA from "../utils/_DATA";
import { connect } from 'react-redux';

class HomePage extends React.Component {

    render() {
        const {users} = this.props
        const {authedUser} = this.props
        console.log('current user from home: ', authedUser)
       // console.log("users from home page: ", Object.keys(users).map((id) =>  users[id].name))
       
        return (
        <div id="custom">
                <NavigationMenu/>
                <div className='container'>
                    <div class="card card-home-big">
                    <ul class="nav nav-pills nav-fill .nav-justified">
                        <li class="nav-item">
                            <Link 
                                class="nav-link" 
                                to="/" >
                                Unanswered questions
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link 
                                class="nav-link" 
                                to="/answered-questions" >
                                Answered questions
                            </Link>
                        </li>
                    </ul> 
                    {
                        Object.keys(users).map((id) => <QuestionItem key={id} user = {users[id].name}></QuestionItem>)
                    }  
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({ users, authedUser, questions }) {
    const user = users[authedUser];
    console.log('current authedUser ls: ' , authedUser)
   // console.log('current user ls: ' , Object.keys(user))
    console.log("hehe", users[Object.keys(users)[0]].answers)
        const answeredQuestions = Object.keys(user.answers)
        .sort((a,b) => questions[b] - questions[a]);
    return {
        unansweredQuestions : Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
        .sort((a,b) => questions[b] - questions[a]),
        answeredQuestions,
        users,
        authedUser,
        questions
    }
  }
  
export default connect(mapStateToProps)(HomePage)

