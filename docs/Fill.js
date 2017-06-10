import React from 'react'
import { Box } from 'reflexbox'
import { dark } from './colors'

const Fill = props => (
  <Box
    {...props}
    className='slide'
    style={{
      ...props.style,
      color: props.color,
      backgroundColor: dark(props.color) ? '#fff' : '#000',
      transitionProperty: 'color',
      transitionDuration: '1s',
      transitionTimingFunction: 'ease-out'
    }}
  />
)

export default Fill
