import React from "react";
import '../App.css';
import {Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationMenu from "./NavigationMenu";
//import AnsweredQuestions from "./AnsweredQuestions";
import QuestionItem from "./QuestionItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
    componentDidMount() {
  
    }
  /*  setDefaultShelves = searchedBooks => {
    const myBooks = this.state.books;
    return searchedBooks.map(book => {
        book.shelf = "none";
        myBooks.forEach(myBook => {
        if (myBook.id === book.id) {
            book.shelf = myBook.shelf;
        }
        });
        return book;
    });
    };
    */
 
    render() {
    const { users } = this.props;

    return (
    <body id="custom">
            <NavigationMenu/>
            <div className='container'>
                <div class="card card-home-big">
                <ul class="nav nav-pills nav-fill .nav-justified">
                    <li class="nav-item">
                        <a class="nav-link ">Unanswered questions</a>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/answered-questions" >Answered questions</Link>
                    </li>
                </ul>
                    <QuestionItem/>
                    <QuestionItem/>
                </div>
            </div>
        </body>
    );
    }
}
export default HomePage;
