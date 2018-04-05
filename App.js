import React from 'react'
import store from './src/common/store'
import { Provider } from 'react-redux'
import AppNavigator from './src/containers/AppNavigator'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
