import React from 'react'

const Button = props => (
  <button
    {...props}
    style={{
      ...props.style,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      whiteSpace: 'nowrap',
      fontFamily: 'inherit',
      fontSize: 12,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '.2em',
      margin: 0,
      padding: 12,
      appearance: 'none',
      border: 0,
      borderRadius: 0,
      color: 'inherit',
      backgroundColor: 'transparent',
    }}
  />
)

export default Button
