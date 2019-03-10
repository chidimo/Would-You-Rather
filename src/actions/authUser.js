import { SET_AUTH_USER, LOGOUT } from './constants'

export const set_auth_user = (id) => {
    return {
          type: SET_AUTH_USER,
          id,
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}
