import React from 'react'
import { addNavigationHelpers, StackNavigator, SwitchNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'
import { View } from 'react-native'
import { Icon } from 'native-base'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { connect } from 'react-redux'
import Login from '../containers/Login'
import ProductsList from '../containers/ProductListView'
import ProductContainer from '../containers/ProductContainer'
import NewOrder from './NewOrder'
import OrderConfirmation from './OrderConfirmationContainer'
import OrdersList from './OrdersListContainer'
import TabBarIcon from '../components/TabBarIcon'
import Drawer from '../components/Drawer'
import NewProduct from '../containers/NewProduct'

const transparentHeaderNavOptions = {
  headerStyle: {
    position: 'absolute',
    backgroundColor: 'transparent',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  },
  headerBackTitleStyle: {
    color: 'white'
  }
}

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
    screen: OrderConfirmation,
    navigationOptions: {
      ...transparentHeaderNavOptions
    }
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

const OrdersNav = StackNavigator({
  OrdersList: {
    screen: OrdersList,
    navigationOptions: {
      title: 'Orders List'
    }
  },
  OrderReceipt: {
    screen: OrderConfirmation,
    navigationOptions: {
      title: 'Receipt'
    }
  }
}, {
  initialRouteName: 'OrdersList'
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
    tabBarIcon: <TabBarIcon navigationState={navigation.state}/>
  })
})

const DrawerIcon = ({ name, focused, tintColor }) => (
  <Icon name={name} style={{ color: tintColor }}/>
)
const AppNav = DrawerNavigator({
  Products: {
    screen: ProductsNav,
    navigationOptions: {
      title: 'Products',
      drawerIcon: <DrawerIcon name={'nutrition'}/>
    }
  },
  Orders: {
    screen: OrdersNav,
    navigationOptions: {
      title: 'My Orders',
      drawerIcon: <DrawerIcon name={'cart'}/>
    }
  },
  NewProduct: {
    screen: NewProduct,
    navigationOptions: {
      title: 'New Product',
      drawerIcon: <DrawerIcon name={'grid'}/>
    }
  }
}, {
  contentComponent: Drawer
})

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
