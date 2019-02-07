import { _saveQuestionAnswer, _saveUser } from '../_DATA.js';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const SIGN_UP = 'SIGN_UP';

export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

function signUpUser(user) {
    return {
        type: SIGN_UP,
        user,
    }
}

function answerQuestion(signedUser, qId, answer) {
    return {
        type: ANSWER_QUESTION,
        qId,
        answer,
        signedUser
    }
}

export function handleAnswerQuestion(qId, answer) {
    return (dispatch, getState) => {

        const { signedUser } = getState();

        return _saveQuestionAnswer({authedUser: signedUser, qid: qId, answer}).then(() => {
            dispatch(answerQuestion(signedUser, qId, answer));
        })
    }
}

export function handleUserSignUp(user) {
    return (dispatch) => {
        return _saveUser({
                username: user.id, 
                name: user.name, 
                avatar: user.avatarURL}).then(() => {
            dispatch(signUpUser(user));
        });
    }
}