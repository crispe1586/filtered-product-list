export function setItems (items) {
  return {
    type: 'SET_ITEMS',
    payload: items
  }
}

export function filterItems () {
  return {
    type: 'FILTER_ITEMS'
  }
}
