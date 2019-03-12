import { RECEIVE_USERS, UPDATE_USER_ANSWERS, UPDATE_USER_QUESTIONS } from '../actions/types';

export const users = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_USERS :
            return { ...state, ...action.users }

        case UPDATE_USER_ANSWERS: 
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]:action.answer
                    }
                }
            }
        
        case UPDATE_USER_QUESTIONS:
            return {
                ...state,
                [action.auth_user]: {
                    ...state[action.auth_user],
                    questions: state[action.auth_user].questions.concat([action.poll_id])
                }
            }

      default :
          return state
    }
}
