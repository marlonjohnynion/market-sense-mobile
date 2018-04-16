import orderReducers from '../../src/reducers/order'

describe('Reducers Test: Orders', () => {
  it('+++ reducer for adding order', () => {
    const order = {
      key: '1',
      data: 'Test order'
    }
    let state = { ordersList: [], ordersMadeToUser: [] }
    state = orderReducers(state, { type: 'ADD_ORDER', order: order })
    const expected = { ordersList: [order], ordersMadeToUser: [], currentOrder: order }
    expect(state).toEqual(expected)
  })

  it('+++ reducer for updating order', () => {
    const order = {
      key: '1',
      data: 'Test order'
    }
    const orderUpdate = {
      ...order,
      data: 'Updated test order'
    }
    let state = { ordersList: [order], ordersMadeToUser: [order], currentOrder: order }
    state = orderReducers(state, { type: 'UPDATE_ORDER', order: orderUpdate})
    const expected = { ordersList: [orderUpdate], ordersMadeToUser: [orderUpdate], currentOrder: orderUpdate}
    expect(state).toEqual(expected)
  })

  it('+++ reducer for adding order made to user', () => {
    const order = {
      key: '1',
      data: 'Test order'
    }
    let state = { ordersList: [], ordersMadeToUser: [] }
    state = orderReducers(state, { type: 'ADD_ORDER_MADE_TO_USER', order: order })
    const expected = { ordersList: [], ordersMadeToUser: [order] }
    expect(state).toEqual(expected)
  })

  it('+++ reducer for viewing order receipt', () => {
    const order = {
      key: '1',
      data: 'Test order'
    }
    let state = { ordersList: [], ordersMadeToUser: [] }
    state = orderReducers(state, { type: 'VIEW_ORDER_RECEIPT', order: order })
    const expected = { ordersList: [], ordersMadeToUser: [], currentOrder: order }
    expect(state).toEqual(expected)
  })
})
