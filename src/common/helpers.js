import { Toast } from 'native-base'
import Fuse from 'fuse.js'

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

export function generateInvoiceNumber () {
  return String(new Date().getTime())
}

export function roundToTwoFixedDecimalPlaces (number) {
  return parseFloat(parseFloat(number).toFixed(2))
}

export function getFullAddress (...args) {
  let address = ''
  args.forEach(arg => {
    address += arg + ', '
  })
  address = address.substring(0, address.length - 2)
  return address
}

export function getDateInWords (date) {
  return new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function toast (message) {
  Toast.show({
    text: String(message),
    position: 'bottom',
    buttonText: 'Okay'
  })
}

export function toastGenericErrorMsg () {
  toast('Something went wrong. Please try again.')
}

export function isNumber (testCase) {
  return !isNaN(testCase)
}

export function getFullName (firstName, lastName) {
  return firstName + ' ' + lastName
}

export const fuzzySearch = (searchTerm, items, fields) => {
  const options = {
    shouldSort: true,
    threshold: 0.5,
    location: 0,
    distance: 5,
    maxPatternLength: 32,
    minMatchCharLength: 4,
    keys: fields
  }
  const searchResults = new Fuse(items, options).search(searchTerm)
  return searchResults
}
