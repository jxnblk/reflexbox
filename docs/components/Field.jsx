
import React from 'react'
import { Box } from '../../src'
import { colors, x } from './styles'

const Field = ({ color, center, ...props }) => (
  <div
    style={{
      textAlign: center ? 'center' : null,
      backgroundColor: colors[color]
    }}>
    <Box {...props} />
  </div>
)

Field.defaultProps = {
  color: 'black'
}

export default Field
