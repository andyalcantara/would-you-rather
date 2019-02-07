import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions';
import { ANSWER_QUESTION } from '../actions/users';

export default function questions(state = {}, action) {
    switch(action.type) {
        case RECEIVE_QUESTIONS:
            return {
                ...state,
                ...action.questions
            }
        case ADD_QUESTION:
            const { question } = action;
            return {
                ...state,
                [question.id]: question
            }
        case ANSWER_QUESTION:
            const { signedUser, qId, answer } = action;
            return {
                ...state,
                [qId]: {
                    ...state[qId],
                    [answer]: {
                        ...state[qId][answer],
                        votes: state[qId][answer].votes.concat([signedUser])
                    }
                }
            }
        default: 
            return state;
    }
}