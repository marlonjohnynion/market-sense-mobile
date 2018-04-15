import React from 'react'
import { connect } from 'react-redux'
import { addNavigationHelpers, SwitchNavigator } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import AppNav from './AppNav'
import AuthNav from './AuthNav'

export const AppNavigator = SwitchNavigator({
  Auth: AuthNav,
  App: AppNav
}, {
  initialRouteName: 'Auth'
})

const AppNavigatorState = ({ dispatch, nav }) => {
  const addListener = createReduxBoundAddListener('root')
  return (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav, addListener })}/>
  )
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppNavigatorState)
