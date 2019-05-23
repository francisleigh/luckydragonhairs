import React from 'react'
import './styles.container.css'

import {palette} from '../../common/styles.common'

const Container = ({
  theme = 'transparent',
  direction = 'row',
  margin = '0',
  padding = '0',
  height = 'inherit',
  width = 'inherit',
  children,
  style = {},
  className = ''
}) => (
  <div className={`container ${className} ${theme}`} style={{
    backgroundColor: palette[theme],
    flexDirection: direction,
    margin,
    padding,
    height,
    width,
    ...style
  }}>
    {children}
  </div>
)

export default Container
