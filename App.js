import React from 'react'
import { Provider } from 'react-redux'
import store from './src/common/store'
import MainContainer from './src/containers/MainContainer'

export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )
  }
}
