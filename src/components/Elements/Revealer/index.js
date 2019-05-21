import React, {useState} from 'react'
import './styles.revealer.css'

import {palette} from '../style.common'

import Container from '../Container'

const Revealer = ({buttonText, children, colors = [palette.dark, palette.light]}) => {
  const [show, setShow] = useState(false)
  const [BG, setBG] = useState(colors[0])

  return (
    <Container>
      <div className="revealer" onMouseEnter={() => setBG(colors[1])} onMouseLeave={() => setBG(colors[0])}>
        {show && children}
        {!show && (
          <>
            <div
              className="revealer__layer"
              style={{backgroundColor: BG}} />
            <button onClick={() => setShow(!show)}>{buttonText}</button>
          </>
        )}
      </div>
    </Container>
  )
}

export default Revealer
