import React from 'react'
import Register from '../containers/Register'
import Login from '../containers/Login'
import { TabNavigator } from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'

export const AuthNav = TabNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
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

export default AuthNav
