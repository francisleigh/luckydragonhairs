import React from 'react'

import button_styles from './button.module.scss'
const Button = ({text = ``, link = ``, target = `_blank`}) => (
  <a href={link} target={target} rel="noopener noreferrer" className={button_styles.button__moneybox}>{text}</a>
)

export default Button
