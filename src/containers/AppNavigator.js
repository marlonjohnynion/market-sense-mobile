import React from 'react'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import Login from '../containers/Login'
import ProductsList from '../containers/ProductListView'
import ProductContainer from '../containers/ProductContainer'

export const AppNavigator = StackNavigator({
  Login: {
    screen: Login
  },
  ProductsList: {
    screen: ProductsList,
    navigationOptions: {
      title: 'Products List',
      header: null
    }
  },
  Product: {
    screen: ProductContainer
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
