import * as actions from '../actions/types/userActionTypes'

const user = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, loggedIn: true, email: action.email }
    case actions.LOGOUT:
      return { ...state, loggedIn: false }
    default:
      return state
  }
}

export default user
