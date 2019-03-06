import { getInitialData } from '../utils/api';

import { receive_users } from './users'
import { receive_questions } from './questions'
import { set_auth_user } from './authUser';

const AUTH_USER_ID = 'sarahedo'

export const handleInitialData = () => {
    return (dispatch) => {
        return getInitialData()
        .then(({users, questions}) => {
            dispatch(receive_users(users))
            dispatch(receive_questions(questions))
            dispatch(set_auth_user(AUTH_USER_ID))
        })
    }
}
