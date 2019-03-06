export const SET_AUTH_USER = 'SET_AUTH_USER'

export const set_auth_user = (id) => {
  return {
      type: SET_AUTH_USER,
      id,
  }
}
