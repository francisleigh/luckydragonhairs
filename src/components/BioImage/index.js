import React from 'react'

import marsh_1 from '../../images/marsh-1.jpeg'
import marsh_2 from '../../images/marsh-2.jpeg'
import marsh_3 from '../../images/marsh-3.jpeg'
import marsh_4 from '../../images/marsh-4.jpeg'

import Container from '../Elements/Container'
import Button from '../Elements/Button'

import container_styles from './bio-image.module.scss'

const IMGS = {
  marsh_1: {img: marsh_1, backgroundPositionY: 'center'},
  marsh_2: {img: marsh_2, backgroundPositionY: 'center'},
  marsh_3: {img: marsh_3, backgroundPositionY: 'top'},
  marsh_4: {img: marsh_4, backgroundPositionY: 'center'}
}

const BioImage = () => {
  const month = new Date(Date.now()).getMonth()
  let KEY = 1

  if ([3,4,5].indexOf(month) !== -1) KEY = 2
  if ([6,7,8].indexOf(month) !== -1) KEY = 3
  if ([9,10,11].indexOf(month) !== -1) KEY = 4

  const {img, backgroundPositionY} = IMGS[`marsh_${KEY}`]

  return (
    <Container className={container_styles.bio_image_container} theme="transparent" style={{
      background: `url(${img}) no-repeat center center`,
      backgroundSize: `cover`,
      backgroundPositionY
    }}>
      <Button text="BOOK" />
    </Container>
  )
}

export default BioImage
