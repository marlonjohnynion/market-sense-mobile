import React from 'react'
import { Container, List, Content, Text, Icon, Button } from 'native-base'
import { ListView } from 'react-native'
import OrdersListItem from './OrdersListItem'

const Orders = ({ orders }) => {
  if (orders) {
    return orders.map((order) => <OrdersListItem key={order.invoiceNumber} order={order}/>)
  }
  return <Text>No Orders Found!</Text>
}

export const DataList = ({ data, actions, RowComponent }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
  console.log(actions)
  return (
    <Container>
      <Content>
        <List
          dataSource={ds.cloneWithRows(data)}
          renderRow={rowData => <RowComponent data={rowData} actions={actions}/>}
          renderRightHiddenRow={order => <Button full onPress={() => console.log(order)}><Icon active name={'trash'} /></Button>}
          rightOpenValue={-75}>
        </List>
      </Content>

    </Container>
  )
}

export default DataList
