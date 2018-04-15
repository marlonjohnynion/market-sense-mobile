const image = (state = {}, action) => {
  switch (action.type) {
    case 'IMAGE_CHOSEN':
      return { ...state, chosenImage: action.image }
    case 'CLEAR_TAKEN_IMAGES':
      return { ...state, chosenImage: undefined }
    default:
      return state
  }
}

export default image
