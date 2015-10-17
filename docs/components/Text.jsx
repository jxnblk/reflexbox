
import React from 'react'
import { h, colors } from './styles'

const Text = ({ small, caps, center, color, ...props }) => (
  <p {...props}
    style={{
      textAlign: center ? 'center' : null,
      fontSize: small ? h[6] : (caps ? h[5] : null),
      fontWeight: caps ? '600' : null,
      textTransform: caps ? 'uppercase' : null,
      letterSpacing: caps ? '.4em' : null,
      color: color ? colors[color] : null
    }} />
)

export default Text
