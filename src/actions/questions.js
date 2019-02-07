import { _saveQuestion } from '../_DATA.js';
import { hideLoading, showLoading } from '../../node_modules/react-redux-loading';

export const RECEIVE_QUESTIONS = 'RECIEVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question, author) {
    return {
        type: ADD_QUESTION,
        question,
        author
    }
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        dispatch(showLoading());
        return _saveQuestion({optionOneText, optionTwoText, author}).then((question) => {
            dispatch(addQuestion(question, author))
        })
        .then(() => dispatch(hideLoading()));
    }
}