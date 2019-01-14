import { getMinValue, getMaxValue } from '../helper'

export function setItems (items) {
  const minPrice = getMinValue(items, 'price')
  const maxPrice = getMaxValue(items, 'price')

  return {
    type: 'SET_ITEMS',
    payload: {
      items: items,
      filteredItems: items,
      minPrice: minPrice,
      maxPrice: maxPrice,
      price: minPrice + (maxPrice - minPrice) / 2
    }
  }
}

export function filterItems (field, value) {
  return {
    type: 'FILTER_ITEMS',
    field: field,
    value: value
  }
}

export function loadMore () {
  return {
    type: 'LOAD_MORE'
  }
}
