import React from 'react'

import {palette} from '../../../styles/styles.global'

import container_styles from './container.module.scss'

const Container = ({
  theme = 'transparent',
  direction = 'row',
  margin = '0',
  padding = '0',
  height = 'inherit',
  width = 'inherit',
  children,
  responsive = false,
  className = ``,
  style = {}
}) => (
  <div className={`${container_styles.container} ${className} ${responsive && container_styles.responsive}`} style={{
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
