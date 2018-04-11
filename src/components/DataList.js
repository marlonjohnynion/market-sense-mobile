import React from 'react'
import { Container, List, Content, Text, Icon, Button } from 'native-base'
import { ListView } from 'react-native'
import OrdersListItem from './OrdersListItem'

export const DataList = ({ data, actions, RowComponent, RightHiddenRowComponent }) => {
  const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
  console.log(actions)
  return (
    <Container>
      <Content>
        <List
          dataSource={ds.cloneWithRows(data)}
          renderRow={rowData => <RowComponent data={rowData} actions={actions}/>}
          renderRightHiddenRow={rowData => <RightHiddenRowComponent data={rowData} actions={actions}/>}
          rightOpenValue={-75}>
        </List>
      </Content>

    </Container>
  )
}

export default DataList
