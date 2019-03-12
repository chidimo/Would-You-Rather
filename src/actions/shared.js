import { showLoading, hideLoading } from 'react-redux-loading';

import { getInitialData, saveQuestionAnswer, saveQuestion } from '../utils/api';

import { receive_users } from './users'
import { receive_questions } from './questions'
import { set_auth_user } from './authUser';


import { ANSWER_QUESTION, UPDATE_USER_ANSWERS, AUTH_USER_ID, ADD_POLL, UPDATE_USER_QUESTIONS } from './constants';

export const handleInitialData = () => {
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receive_users(users))
            dispatch(receive_questions(questions))
            dispatch(set_auth_user(AUTH_USER_ID))
            dispatch(hideLoading())
        })
    }
}

export const answer_question = ({ authedUser, qid, answer }) => {
    return {
        type: ANSWER_QUESTION,
        authedUser,
        answer,
        qid,
    }
}

export const update_user_answers = ({ authedUser, qid, answer }) => {
    return {
        type: UPDATE_USER_ANSWERS,
        authedUser,
        answer,
        qid,
    }
}

export const handle_answer_question = (info) => {
    return (dispatch) => {

        dispatch(answer_question(info))
        dispatch(update_user_answers(info))
        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in handle_answer_question', e)
                dispatch(answer_question(info))
                dispatch(update_user_answers(info))
                alert('There was an error answering the question. Try again.')
            })
    }
}


// Question addition
export const add_poll = (poll) => {
    return {
        type: ADD_POLL,
        poll
    }
}

export const update_user_questions = (auth_user, poll_id) => {
    return {
        type: UPDATE_USER_QUESTIONS,
        auth_user,
        poll_id,
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
        .then((poll) => {
            dispatch(add_poll(poll))
            dispatch(update_user_questions(auth_user, poll.id))
        })
        .then(() => dispatch(hideLoading()))
    }
}
