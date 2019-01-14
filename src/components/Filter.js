import React, { Component } from 'react'

class Filter extends Component {

  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.createSelectOptions = this.createSelectOptions.bind(this)
  }
  handleChange (e) {
    const field = e.target.id
    const multiple = e.target.multiple
    let value = e.target.value

    if (multiple) {
      value = this.getMultipleValues(e.target)
    }
    this.props.filterItems(field, value)
  }
  createSelectOptions (option) {
    return <option key={ option } value={ option }>{ option }</option>
  }
  render () {
    const {
      name,
      brand,
      type,
      size,
      rating,
      price,
      typeCategories,
      sizeCategories,
      maxPrice,
      minPrice
    } = this.props
    const optionsTypeCategories = typeCategories.map(this.createSelectOptions)
    const optionsSizeCategories = sizeCategories.map(this.createSelectOptions)
    return (
      <div className="Filter">
        <div className="Field">
          <label>Name</label>
          <input
            id="name"
            type="text"
            onBlur={ this.handleChange }
            onChange={ this.handleChange }
            value={ name }
            placeholder="Name..." />
        </div>
        <div className="Field">
          <label>Brand</label>
          <input
            id="brand"
            type="text"
            onBlur={ this.handleChange }
            onChange={ this.handleChange }
            value={ brand }
            placeholder="Brand..." />
        </div>
        <div className="Field">
          <label>Type</label>
          <select
            id="type"
            value={ type }
            onChange={ this.handleChange }
            onBlur={ this.handleChange }>
            <option value="">Select the type...</option>
            { optionsTypeCategories }
          </select>
        </div>
        <div className="Field">
          <label>Size</label>
          <select
            id="size"
            value={ size }
            onChange={ this.handleChange }
            onBlur={ this.handleChange }>
            <option value="">Select the size...</option>
            { optionsSizeCategories }
          </select>
        </div>
        <div className="Field">
          <label>Rating</label>
          <input
            id="rating"
            type="range"
            value={ rating }
            min="0"
            max="100"
            step="1"
            onChange={ this.handleChange }
            onBlur={ this.handleChange }
            placeholder="Rating..." />
        </div>
        <div className="Field">
          <label>Price</label>
          <input
            id="price"
            type="range"
            value={ price }
            min={ minPrice }
            max={ maxPrice }
            step={ (maxPrice - minPrice) / 100 }
            onChange={ this.handleChange }
            onBlur={ this.handleChange }
            placeholder="Price..." />
        </div>
      </div>
    )
  }

}

export default Filter
