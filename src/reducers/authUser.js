import { SET_AUTH_USER, LOGOUT } from '../actions/constants'

export const auth_user = (state='', action) => {
    switch (action.type) {
        case SET_AUTH_USER :
            return action.id

        case LOGOUT:
            return ''

      default :
          return state
    }
}
