import React from 'react'
import { Container, List, Content, Text } from 'native-base'
import OrdersListItem from './OrdersListItem'

const Orders = ({orders}) => {
  if (orders) {
    return orders.map((order) => <OrdersListItem key={order.invoiceNumber} order={order}/>)
  }
  return <Text>No Orders Found!</Text>
}

export const OrdersList = ({ orders }) => {
  return (
    <Container>
      <Content>
        <List>
          <Orders orders={orders} />
        </List>
      </Content>

    </Container>
  )
}

export default OrdersList
