function reducer (state, action) {
  if (state === undefined) {
    return {
      items: null,
      filteredItems: [],
      name: ''
    }
  }

  switch (action.type) {
    case 'SET_ITEMS': {
      const { payload: items } = action
      return {
        items: items
      }
    }
    case 'FILTER_ITEMS': {
      const { items, name } = state
      // filtering by name for now
      const filteredItems = items.filter((i) => i.name === name)
      return {
        state,
        filteredItems: filteredItems
      }
    }
    default:
      return state
  }
}

export default reducer
