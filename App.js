import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'
import store from './src/common/store'
import Login from './src/containers/Login'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    )
  }
}
