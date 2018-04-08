import React from 'react'
import { Provider } from 'react-redux'
import store from './src/common/store'
import AppNavigator from './src/containers/AppNavigator'

import Order from './src/containers/Order'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        {/*<Order/>*/}
        <AppNavigator />
      </Provider>
    )
  }
}
