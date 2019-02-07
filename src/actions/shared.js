import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { handleSignUser } from './signedUser';
import { getInitialData } from '../api';
import { showLoading, hideLoading } from 'react-redux-loading';

export function handleInitialData() {
    return (dispatch) => {
        dispatch(showLoading());
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(handleSignUser(null));
            dispatch(receiveQuestions(questions));
            dispatch(hideLoading());
        });
    }
}