import React from 'react'
import { connect } from 'react-redux'
import AppNavigator from '../navigators/AppNavigator'
import { Root } from 'native-base'
import Loading from '../components/Loading'

export const MainContainer = ({loading}) => {
  return (
    <Root>
      {loading ? <Loading /> : null}
      <AppNavigator/>
    </Root>
  )
}

const mapStateToProps = (state) => ({
  loggedIn: state.user.loggedIn,
  loading: state.app.loading
})

export default connect(mapStateToProps)(MainContainer)
