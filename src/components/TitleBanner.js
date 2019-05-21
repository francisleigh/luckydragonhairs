import PropTypes from "prop-types"
import React from "react"

const TitleBanner = ({children}) => (
  <div style={{
    flexDirection: 'column',
    textAlign: 'center',
    padding: '1rem 0',
    margin: '5rem 0 0 0'
  }}>
    <h1>Lucky Dragon Hairs</h1>
  </div>
)

TitleBanner.propTypes = {
  children: PropTypes.node
}

export default TitleBanner


