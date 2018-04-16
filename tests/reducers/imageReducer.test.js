import imageReducers from '../../src/reducers/image'

describe('Reducers Test: Image', () => {
  it('+++ reducer for choosing image', () => {
    const image = { name: 'testImage' }
    let state = { chosenImage: undefined }
    state = imageReducers(state, { type: 'IMAGE_CHOSEN', image: image })
    const expected = { chosenImage: image }
    expect(state).toEqual(expected)
  })

  it('+++ reducer for clearing taken image', () => {
    const image = { name: 'testImage' }
    let state = { chosenImage: image }
    state = imageReducers(state, { type: 'CLEAR_TAKEN_IMAGE' })
    const expected = { chosenImage: undefined }
    expect(state).toEqual(expected)
  })
})
