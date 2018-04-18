import { clearTakenImage, chooseImage } from '../../src/actions/creators/image'

describe('Actions Test: Image Actions', () => {
  it('+++ ACTION CREATOR -> chooses image', () => {
    const image = { uri: 'test uri' }
    const test = chooseImage(image)
    expect(test).toEqual({ type: 'IMAGE_CHOSEN', image: image })
  })

  it('+++ ACTION CREATOR -> clear taken image', () => {
    const test = clearTakenImage()
    expect(test).toEqual({ type: 'CLEAR_TAKEN_IMAGE' })
  })
})
