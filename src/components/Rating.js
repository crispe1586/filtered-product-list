import React from 'react'
import times from 'lodash/times'

export const Rating = ({ stars: { value } }) => {
  // const scaledValue = value * (5 / 100)

  return (
    <div className="rating">
      { times(5, function (index) {
        return (
          <div className={ (value > index) ? 'rating__label selected' : 'rating__label' } key={ index } />
        )
      })}
    </div>
  )
}

export default Rating
