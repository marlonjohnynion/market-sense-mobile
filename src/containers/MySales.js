import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Icon, Grid, Col } from 'native-base'
import { updateOrderStatus, viewSaleReceipt } from '../actions/orderActions'
import DataList from '../components/DataList'
import OrdersListItem from '../components/OrdersListItem'

const ListItem = ({ data, actions }) => {
  return <OrdersListItem key={data.invoiceNumber} order={data} onPress={actions.viewSaleReceipt}/>
}

const RightHiddenRowComponent = ({ data, actions }) => (
  <Grid>
    <Col>
      <Button full danger onPress={() => { actions.updateOrderStatus(data) }}>
        <Icon active name="trash"/>
      </Button>
    </Col>
  </Grid>
)

const SalesList = (props) => {
  const { sales, actions } = props
  return <DataList data={sales} actions={actions} RowComponent={ListItem} RightHiddenRowComponent={RightHiddenRowComponent}/>
}

const mapStateToProps = state => {
  return {
    sales: state.orders.ordersMadeToUser
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ viewSaleReceipt, updateOrderStatus }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(SalesList)
