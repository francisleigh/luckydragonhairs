import React from 'react'

import button_styles from './button.module.scss'
const Button = ({text = ``, href = ``}) => (
  <a href={href} className={button_styles.button}>{text}</a>
)

export default Button
