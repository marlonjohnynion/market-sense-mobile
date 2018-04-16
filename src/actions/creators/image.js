export const clearTakenImage = () => ({
  type: 'CLEAR_TAKEN_IMAGE'
})

export const chooseImage = (pickedImage) => ({
  type: 'IMAGE_CHOSEN', image: pickedImage
})
