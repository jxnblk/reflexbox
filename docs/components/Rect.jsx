
import React from 'react'
import { Box } from '../../src'
import { colors, x } from './styles'

const Rect = ({ color, border, pad, ...props }) => (
  <div
    style={{
      textAlign: 'center',
      boxShadow: `inset 0 0 0 ${border}px`,
      color: colors[color]
    }}>
    <Box {...props} />
  </div>
)

Rect.defaultProps = {
  color: 'blue',
  pad: 2,
  border: 2
}

export default Rect
