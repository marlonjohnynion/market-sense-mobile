import userReducers from '../../src/reducers/user'

describe('Reducers Tests: User', () => {
  it('+++ reducer for user login', () => {
    let state = {loggedIn: false}
    const expected = {loggedIn: true, email: 'marlonjohnynion@gmail.com'}
    state = userReducers(state,
      {type: 'LOGIN', email: 'marlonjohnynion@gmail.com'})
    expect(state).toEqual(expected)
  })

  it('+++ reducer for user logout', () => {
    let state = {loggedIn: true}
    const expected = {loggedIn: false}
    state = userReducers(state, {type: 'LOGOUT'})
    expect(state).toEqual(expected)
  })
})
