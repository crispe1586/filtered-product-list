import { filterIncludes, filterIsEqual, filterLessThan, filterMoreThan } from '../helper'

function reducer (state, action) {
  if (state === undefined) {
    return {
      items: null,
      filteredItems: null,
      filter: {
        name: '',
        brand: '',
        type: '',
        rating: 50,
        size: '',
        price: 0
      },
      typeCategories: [
        'Eau de Parfum',
        'Eau de Toilette',
        'Parfum'
      ],
      sizeCategories: [
        '30ML',
        '40ML',
        '50ML',
        '60ML'
      ],
      maxPrice: null,
      minPrice: null,
      visibleItems: 9
    }
  }

  switch (action.type) {
    case 'SET_ITEMS': {
      const { items, filteredItems, minPrice, maxPrice, price } = action.payload
      return {
        ...state,
        items: items,
        filteredItems: filteredItems,
        minPrice: minPrice,
        maxPrice: maxPrice,
        filter: {
          ...state.filter,
          price: price
        }
      }
    }
    case 'FILTER_ITEMS': {
      const {
        items
      } = state
      const { field, value } = action
      const fieldFilters = {
        name: filterIncludes,
        brand: filterIncludes,
        type: filterIsEqual,
        size: filterIsEqual,
        rating: filterMoreThan,
        price: filterLessThan
      }
      let { filter } = state
      let updatedItems = items
      filter[field] = value

      for (let [field, fnFilter] of Object.entries(fieldFilters)) {
        if (filter[field] !== '' && filter[field] !== 0) {
          updatedItems = fnFilter(updatedItems, field, filter[field])
        }
      }

      return {
        ...state,
        filteredItems: updatedItems,
        filter: {
          ...state.filter,
          [field]: value
        },
        visibleItems: 12
      }
    }
    case 'LOAD_MORE': {
      return {
        ...state,
        visibleItems: state.visibleItems + 12
      }
    }
    default:
      return state
  }
}

export default reducer
