import React from 'react'
import { connect } from 'react-redux'
import AppNavigator from '../navigators/AppNavigator'
import { Root } from 'native-base'

export const MainContainer = () => {
  return (
    <Root>
      <AppNavigator/>
    </Root>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn
})

export default connect(mapStateToProps)(MainContainer)
