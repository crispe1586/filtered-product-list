import React, { Component } from 'react'
import '../scss/App.scss'
import Filter from '../components/Filter'
import List from '../components/List'
import Loader from '../components/Loader'
import itemsData from '../helper/productList.json'

class Container extends Component {

  componentDidMount () {
    this.props.setItems(itemsData)
  }
  render () {
    const {
      items,
      minPrice,
      maxPrice,
      filteredItems,
      filter,
      typeCategories,
      sizeCategories,
      filterItems,
      loadMore,
      visibleItems
    } = this.props

    if (!items) {
      return <Loader />
    }

    return (
      <div className="App">
        <Filter
          { ...filter }
          typeCategories={ typeCategories }
          sizeCategories={ sizeCategories }
          items={ items }
          minPrice={ minPrice }
          maxPrice={ maxPrice }
          filteredItems={ filteredItems }
          filterItems={ filterItems } />
        <List
          items={ filteredItems.slice(0, visibleItems) } />
        { visibleItems < filteredItems.length &&
          <button onClick={ loadMore } type="button" className="btn">Load more</button>
        }
      </div>
    )
  }

}

export default Container
