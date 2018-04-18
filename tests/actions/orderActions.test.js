import {
  viewOrderReceipt,
  addOrderThenNavigate,
  viewSaleReceipt
} from '../../src/actions/creators/order'

describe('Actions Test: Order Actions', () => {
  it('+++ ACTION CREATOR -> navigates to order screen', () => {
    const test = addOrderThenNavigate()
    expect(test).toEqual({ type: 'ADD_ORDER_NAV' })
  })

  it('+++ ACTION CREATOR -> views order receipt', () => {
    const order = { id: 1, data: 'test' }
    const test = viewOrderReceipt(order)
    expect(test).toEqual({ type: 'VIEW_ORDER_RECEIPT', order: order })
  })

  it('+++ ACTION CREATOR -> views sales receipt', () => {
    const order = { id: 1, data: 'test' }
    const test = viewSaleReceipt(order)
    expect(test).toEqual({ type: 'VIEW_SALE_RECEIPT', order: order })
  })
})
