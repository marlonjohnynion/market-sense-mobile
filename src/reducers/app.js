const app = (state = {}, action) => {
  switch (action.type) {
    case 'LOADING_STARTED':
      return { ...state, loading: true }
    case 'LOADING_FINISHED':
      return { ...state, loading: false }
    default:
      return state
  }
}

export default app
