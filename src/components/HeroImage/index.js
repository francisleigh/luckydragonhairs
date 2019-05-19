import PropTypes from "prop-types"
import React from "react"

import img from '../../images/marsh.jpg'

import './styles.hero-image.css'
const HeroImage = ({children}) => (
  <div className="hero-image" style={{
    backgroundColor: '#FFB300',
    background: `url(${img}) no-repeat center center`,
    backgroundSize: `cover`
  }}>
    <div class="hero-image__heading-container">
      {children}
    </div>
  </div>
)

HeroImage.propTypes = {
  children: PropTypes.node.isRequired
}

export default HeroImage
