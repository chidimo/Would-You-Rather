
import { RECEIVE_USERS } from './types'

export const receive_users = (users) => {
    return {
        type: RECEIVE_USERS,
        users,
    }
}
