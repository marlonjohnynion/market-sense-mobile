import * as actions from '../actions/types/userActionTypes'

const user = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, loggedIn: true, email: action.email, password: action.password }
    default:
      return state
  }
}

export default user
