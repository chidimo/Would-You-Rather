import { RECEIVE_QUESTIONS, ANSWER_QUESTION, ADD_POLL } from '../actions/types';

export const questions = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return { ...state, ...action.questions }

        case ANSWER_QUESTION:
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: state[action.qid][action.answer].votes.concat([action.authedUser])
                    }
                }
            }

        case ADD_POLL:
            return {
                ...state,
                [action.poll.id]: action.poll
            }

      default:
          return state

    }
}
