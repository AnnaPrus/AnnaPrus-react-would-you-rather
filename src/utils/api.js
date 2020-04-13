import {
    _getUsers,
    _getQuestions,
    _saveQuestionAnswer,
    _saveQuestion,
  } from '../_DATA.js'

  export function getInitialUsers() {
    return _getUsers()
        .then(users => ({
           users 
        }))
}