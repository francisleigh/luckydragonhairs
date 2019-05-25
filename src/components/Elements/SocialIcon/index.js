import React from 'react'

const SocialIcon = ({ height = '50px', width = '50px', icon = void 0, link = '#' }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div style={{
      background: `url(${icon}) round`,
      backgroundSize: `cover`,
      width, height
    }}></div>
  </a>
)

export default SocialIcon
