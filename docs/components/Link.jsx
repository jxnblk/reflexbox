
import React from 'react'

const sx = {
  fontSize: 14,
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '.4em',
  textDecoration: 'none',
  lineHeight: 3,
  color: 'blue',
}

const Link = (props) => (
  <a {...props} style={sx} />
)

export default Link
