export const addOrderThenNavigate = () => ({
  type: 'ADD_ORDER_NAV'
})

export const viewOrderReceipt = (order) => ({
  type: 'VIEW_ORDER_RECEIPT',
  order: order
})

export const viewSaleReceipt = (order) => ({
  type: 'VIEW_SALE_RECEIPT',
  order: order
})
