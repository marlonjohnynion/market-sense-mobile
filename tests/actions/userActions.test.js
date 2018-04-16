import * as actions from '../../src/actions/types/userActionTypes'
import * as userActions from '../../src/actions/creators/user'

describe('Actions Test: User Actions', () => {
  it('+++ ACTION CREATOR -> logins user', () => {
    const email = 'test@test.com'
    const login = userActions.loginSuccess({email: email})
    expect(login).toEqual({type: actions.LOGIN, email: email})
  })

  it('+++ ACTION CREATOR -> fails to login user', () => {
    const error = 'invalid passowrd'
    const failedLogin = userActions.loginFail(error)
    expect(failedLogin).toEqual({type: actions.LOGIN_FAILED, error: error})
  })

  it('+++ ACTION CREATOR -> fails to register user', () => {
    const error = 'duplicate email address'
    const failedRegistration = userActions.registerFail(error)
    expect(failedRegistration).toEqual({type: actions.REGISTER_USER_FAILED, error: error})
  })
})
