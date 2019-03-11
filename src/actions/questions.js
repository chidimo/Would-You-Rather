import { showLoading, hideLoading } from 'react-redux-loading';

import { RECEIVE_QUESTIONS, ADD_POLL } from './constants'

import { saveQuestion } from '../utils/api'

export const receive_questions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export const add_poll = (poll) => {
    return {
        type: ADD_POLL,
        poll
    }
}

export const handle_add_poll = (optionOneText, optionTwoText) => {
    return (dispatch, getState) => {
        const { auth_user } = getState()

        dispatch(showLoading())
        return saveQuestion({
            author: auth_user,
            optionOneText,
            optionTwoText,
        })
        .then((poll) => dispatch(add_poll(poll)))
        .then(() => dispatch(hideLoading()))
    }
}
