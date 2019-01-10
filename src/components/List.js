import React from 'react'
import Item from './Item'

const List = ({ items }) =>
  <div className="List">
    {items.map((item) =>
      <Item key={ item.id } item={ item } />
    )
    }
  </div>

export default List
