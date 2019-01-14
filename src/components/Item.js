import React, { Component } from 'react'
import { PUBLIC_URL } from '../routes'
import Rating from './Rating'

class Item extends Component {

  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    const { slug } = this.props.item
    window.open(`${PUBLIC_URL}${slug}`, '_blank')
  }

  render () {
    const {
      name,
      brand,
      type,
      image,
      price,
      size,
      rating
    } = this.props.item

    return (
      <div className="Item" onClick={ this.handleClick }>
        <img className="picture" src={ image } alt={ name } />
        <div className="features">
          <div className="brand">{ brand}</div>
          <div className="name">{ name }</div>
          <div className="type">{ type}</div>
          <div className="price-size">{ `ab ${price / 100} € / ${size}` }</div>
          <Rating stars={{ value: (rating * 0.05) }} />
        </div>
      </div>
    )
  }

}

export default Item
