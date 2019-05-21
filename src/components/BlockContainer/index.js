import React from 'react'
import './styles.block-container.css'
const BlockContainer = props => (
  <div className="block-container">
    {props.children}
  </div>
)

export default BlockContainer
