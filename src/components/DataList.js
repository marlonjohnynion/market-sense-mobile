import React from 'react'
import { Container, List, Content, Text, Icon, Button } from 'native-base'
import { ListView } from 'react-native'
import OrdersListItem from './OrdersListItem'

export const DataList = ({ data, actions, RowComponent, RightHiddenRowComponent }) => {
  const HiddenComponent = (data) => {
    if (RightHiddenRowComponent) {
      return <RightHiddenRowComponent data={data} actions={actions}/>
    }
    return undefined
  }
  const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 })
  return (
    <Container>
      <Content>
        <List
          dataSource={ds.cloneWithRows(data)}
          renderRow={rowData => <RowComponent data={rowData} actions={actions}/>}
          renderRightHiddenRow={HiddenComponent}
          rightOpenValue={-75}>
        </List>
      </Content>

    </Container>
  )
}

export default DataList
