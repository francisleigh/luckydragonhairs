import React, {useState} from 'react'
import './styles.revealer.css'

import {palette} from '../../common/styles.common'

const Revealer = ({buttonText, children, colors = [palette.dark, palette.light]}) => {
  const [show, setShow] = useState(false)
  const [BG, setBG] = useState(colors[0])

  return (
    <div className="revealer" onMouseEnter={() => setBG(colors[1])} onMouseLeave={() => setBG(colors[0])}>
      {show ? children : (
        <>
          <div
            className="revealer__layer"
            style={{backgroundColor: BG}} />
          <button onClick={() => setShow(!show)}>{buttonText}</button>
        </>
      )}
    </div>
  )
}

export default Revealer
