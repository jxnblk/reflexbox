
import React from 'react'
import { colors, x } from './styles'

const Rect = ({ color, border, pad, ...props }) => (
  <div
    {...props}
    style={{
      textAlign: 'center',
      padding: x[pad],
      boxShadow: `inset 0 0 0 ${border}px`,
      color: colors[color]
    }} />
)

Rect.defaultProps = {
  color: 'blue',
  pad: 2,
  border: 2
}

export default Rect
