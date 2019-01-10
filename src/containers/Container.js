import React, { Component } from 'react'
import '../scss/App.scss'
import Loader from '../components/Loader'
import Filter from '../components/Filter'
import List from '../components/List'
import itemsData from '../helper/productList.json'

class Container extends Component {

  componentDidMount () {
    this.props.setItems(itemsData)
  }

  render () {
    const { items } = this.props
    if (!items) {
      return <Loader />
    }

    return (
      <div className="App">
        <Filter />
        <List
          items={ items } />
      </div>
    )
  }

}

export default Container
