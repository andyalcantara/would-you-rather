import { RECEIVE_USERS, ANSWER_QUESTION, SIGN_UP } from '../actions/users';
import { ADD_QUESTION } from '../actions/questions';

export default function users(state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case ANSWER_QUESTION:
            const { signedUser, qId, answer } = action;

            return {
                ...state,
                [signedUser]: {
                    ...state[signedUser],
                    answers: {
                        ...state[signedUser].answers,
                        [qId]: answer
                    }
                }
            }
        case ADD_QUESTION:
            const { question, author } = action;

            return {
                ...state,
                [author]: {
                    ...state[author],
                    questions: state[author].questions.concat([question.id])
                }
            }
        case SIGN_UP: 
            const { user } = action;

            return {
                ...state,
                [user.id]: user
            }
        default: 
            return state;
    }
}