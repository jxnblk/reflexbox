import React from 'react'
import { Box } from 'reflexbox'

const Border = props => (
  <Box
    {...props}
    style={{
      ...props.style,
      borderWidth: 4,
      borderStyle: 'solid'
    }}
  />
)

export default Border
