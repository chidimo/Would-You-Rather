import { RECEIVE_QUESTIONS } from './constants'

export const receive_questions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
