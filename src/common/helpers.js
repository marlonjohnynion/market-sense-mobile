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