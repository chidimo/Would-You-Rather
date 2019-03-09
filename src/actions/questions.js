import { saveQuestionAnswer } from '../utils/api';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const receive_questions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

export const answer_question = ({ auth_user, question_id, answer_id,  }) => {
    return {
        type: ANSWER_QUESTION,
        question_id,
        answer_id,
        auth_user,
    }
}

export const handle_answer_question = (info) => {
    return (dispatch) => {
        dispatch(answer_question(info))

        return saveQuestionAnswer(info)
            .catch((e) => {
                console.warn('Error in handle_answer_question', e)
                dispatch(answer_question(info))
                alert('There was an error answering the question. Try again.')
            })
    }
}
