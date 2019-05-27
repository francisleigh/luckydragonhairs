import React from 'react'

const SocialIcon = ({ height = '30px', width = '30px', icon = void 0, link = '#' }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <div style={{
      background: `url(${icon}) round`,
      backgroundSize: `cover`,
      margin: '0.5rem',
      width, height
    }}></div>
  </a>
)

export default SocialIcon
