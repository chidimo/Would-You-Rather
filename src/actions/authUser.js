import { SET_AUTH_USER, LOGOUT, LOGIN } from './types'

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

export const login = (id) => {
    return {
        type: LOGIN,
        id
    }
}
