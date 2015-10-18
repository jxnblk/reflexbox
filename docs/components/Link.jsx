
import React from 'react'
import { colors } from './styles'

const sx = {
}

const Link = ({ color, ...props }) => (
  <a {...props} style={{
    fontSize: 12,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '.4em',
    textDecoration: 'none',
    lineHeight: 3,
    color: colors[color],
  }} />
)

Link.defaultProps = {
  color: 'blue'
}

export default Link
