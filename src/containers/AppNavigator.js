import React from 'react'
import { addNavigationHelpers, StackNavigator, SwitchNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Login from '../containers/Login'
import ProductsList from '../containers/ProductListView'
import ProductContainer from '../containers/ProductContainer'
import NewOrder from './NewOrder'
import OrderConfirmation from './OrderConfirmationContainer'

const ProductsNav = StackNavigator({
  ProductsList: {
    screen: ProductsList,
    navigationOptions: {
      title: 'Products List',
      header: null
    }
  },
  Order: {
    screen: NewOrder
  },
  OrderData: {
    screen: OrderConfirmation
  },
  Product: {
    screen: ProductContainer,
    navigationOptions: {
      title: 'Product Information'
    }
  }
}, {
  initialRouteName: 'ProductsList'
})

const AuthNav = TabNavigator({
  Login: {
    screen: Login
  }
}, {
  tabBarOptions: {
    labelStyle: {
      fontSize: 16
    },
    style: {
      height: 55
    }
  },
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({focused, tintColor}) => {
      const { routeName } = navigation.state
      let iconName
      if (routeName === 'Login') {
        iconName = `ios-person${focused ? '' : '-outline'}`
      } else {
        iconName = `ios-person-add${focused ? '' : '-outline'}`
      }
      return <Ionicons name={iconName} size={30} color={tintColor}/>
    }
  })
})

const AppNav = DrawerNavigator({
  Products: ProductsNav
})

export const AppNavigator = SwitchNavigator({
  Auth: AuthNav,
  App: AppNav
}, {
  initialRouteName: 'Auth'
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
