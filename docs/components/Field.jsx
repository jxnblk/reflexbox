
import React from 'react'
import { colors, x } from './styles'

const Field = ({ color, pad, center, ...props }) => (
  <div
    {...props}
    style={{
      textAlign: center ? 'center' : null,
      padding: x[pad],
      backgroundColor: colors[color]
    }} />
)

Field.defaultProps = {
  color: 'aqua',
  pad: 2,
}

export default Field
