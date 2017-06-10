import React from 'react'

const Btn = props => (
  <a
    {...props}
    style={{
      ...props.style,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '.2em',
      padding: 12,
      color: 'inherit',
      backgroundColor: 'transparent',
    }}
  />
)

export default Btn
