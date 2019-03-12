import { RECEIVE_QUESTIONS } from './types'

export const receive_questions = (questions) => {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}
