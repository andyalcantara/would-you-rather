import { combineReducers } from 'redux';
import signedUser from './signedUser';
import questions from './questions';
import users from './users';

export default combineReducers({
    users,
    questions,
    signedUser
});
