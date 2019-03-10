
import { RECEIVE_USERS } from './constants'

export const receive_users = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    }
}
