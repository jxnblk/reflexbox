
import React from 'react'
import { colors } from './styles'

const Heading = ({ level, color, ...props }) => {
  const Component = `h${level}`
  return <Component {...props}
    className='caps'
    style={{
      color: color ? colors[color] : null
    }} />
}

Heading.defaultProps = {
  level: 2
}

export default Heading
