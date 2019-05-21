import React, { useState } from 'react'

import './styles.price-list-revealer.css'

const PriceListRevealer = () => {
  const [show, toggleShow] = useState(false)

  const _handleClick = () => {
    if (!show) toggleShow(!show)
    else {
      alert('go to booking app')
    }
  }
  return (
    <div className="price-list-container">
      <h2>Price List</h2>
      {show && (
        <ul className="price-list">
          <li className="price-list__item">
            <span>Cut</span>
            <span>£30.00</span>
          </li>
          <li className="price-list__item">
            <span>Cut</span>
            <span>£30.00</span>
          </li>
          <li className="price-list__item">
            <span>Cut</span>
            <span>£30.00</span>
          </li>
          <li className="price-list__item">
            <span>Cut</span>
            <span>£30.00</span>
          </li>
          <li className="price-list__item">
            <span>Cut</span>
            <span>£30.00</span>
          </li>
        </ul>
      )}
      <button className="price-list__button" onClick={_handleClick}>{show ? 'Book' : 'Price List'}</button>
    </div>
  )
}

export default PriceListRevealer
