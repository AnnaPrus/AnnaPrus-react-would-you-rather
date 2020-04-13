import { getInitialUsers } from '../utils/api'
import { receiveUsers } from '../actions/users'

export function handleInitialUsers () {
    return (dispatch) => {
        return getInitialUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
        })
    }
  }