import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import NavigationMenu from './components/NavigationMenu';
import NewQuestion from './components/NewQuestion';
import LeaderBoard from './components/LeaderBoard';
import UnansweredQuestions from './components/UnansweredQuestions';
import AsweredQuestions from './components/AnsweredQuestions';
import * as serviceWorker from './serviceWorker';
import AnsweredQuestions from './components/AnsweredQuestions';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
        <App />
    </React.StrictMode>
</BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
