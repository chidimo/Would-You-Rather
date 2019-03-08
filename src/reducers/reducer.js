import { combineReducers } from 'redux';

import { auth_user } from './authUser';
import { users } from './users';
import { questions } from './questions';
import { loadingBarReducer } from 'react-redux-loading';

export const reducer = combineReducers({
    auth_user,
    users,
    questions,
    loadingBar: loadingBarReducer
})
