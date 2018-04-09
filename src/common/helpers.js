export function insertItemToArray (array, item) {
  let newArray = array.slice()
  newArray.splice(newArray.length, 0, item)
  return newArray
}

export function getTotalPrice (quantity, price) {
  return quantity * price
}

export function getCurrentRoute (navigationState) {
  if (!navigationState || !navigationState.routes) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getCurrentRoute(route)
  }
  return route
}

export function generateInvoiceNumber() {
  return String(new Date().getTime())
}

export function roundToTwoFixedDecimalPlaces(number) {
  return parseFloat(number).toFixed(2)
}

export function getFullAddress (...args) {
  let address = ''
  args.forEach(arg => {
    address += arg + ' '
  })
  return address
}

export function getDateInWords (date) {
  return new Date(date).toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
}
