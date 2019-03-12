import { SET_AUTH_USER, LOGOUT, LOGIN } from '../actions/types'

export const auth_user = (state='', action) => {
    switch (action.type) {
        case SET_AUTH_USER :
            return action.id

        case LOGOUT:
            return ''

        case LOGIN:
            return action.id

      default :
          return state
    }
}
