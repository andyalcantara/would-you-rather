import { combineReducers } from 'redux';
import signedUser from './signedUser';
import questions from './questions';
import users from './users';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
    users,
    questions,
    signedUser,
    loadingBar: loadingBarReducer,
});
