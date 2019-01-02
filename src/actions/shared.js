import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { handleSignUser } from './signedUser';
import { getInitialData } from '../api';

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData().then(({users, questions}) => {
            dispatch(receiveUsers(users));
            dispatch(handleSignUser(null));
            dispatch(receiveQuestions(questions));
        });
    }
}