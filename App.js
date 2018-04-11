import React from 'react'
import { Provider } from 'react-redux'
import store from './src/common/store'
import MainContainer from './src/containers/MainContainer'

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
  )
}

export default App
