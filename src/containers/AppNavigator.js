import React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'

import Login from '../containers/Login'

export const AppNavigator = StackNavigator({
  Login: {
    screen: Login,
    title: 'Login'
  }
}, {
  initialRouteName: 'Login'
})

const AppNavigatorState = ({dispatch, nav}) => {
  const addListener = createReduxBoundAddListener('root')
  return (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav, addListener})}/>
  )
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppNavigatorState)
