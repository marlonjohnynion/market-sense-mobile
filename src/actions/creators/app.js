export function endLoading () {
  return { type: 'LOADING_FINISHED' }
}

export function startLoading () {
  return { type: 'LOADING_STARTED' }
}
