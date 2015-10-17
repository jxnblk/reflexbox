
import React from 'react'
import { colors } from './styles'

const Heading = ({ level, center, color, ...props }) => {
  const Component = `h${level}`
  return <Component {...props}
    style={{
      textTransform: 'uppercase',
      letterSpacing: '.4em',
      textAlign: center ? 'center' : null,
      color: color ? colors[color] : null
    }} />
}

Heading.defaultProps = {
  level: 2
}

export default Heading
