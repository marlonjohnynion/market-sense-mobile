export function insertItemToArray (array, item) {
  let newArray = array.slice()
  newArray.splice(newArray.length, 0, item)
  return newArray
}