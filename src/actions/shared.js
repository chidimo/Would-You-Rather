import { getInitialData } from '../utils/api';

import { receive_users } from './users'
import { receive_questions } from './questions'
import { set_auth_user } from './authUser';

import { showLoading, hideLoading } from 'react-redux-loading';

const AUTH_USER_ID = 'chidiorji'

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
