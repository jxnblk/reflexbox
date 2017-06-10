import React from 'react'

const Text = props => (
  React.createElement(props.is,
    Object.assign({}, props, {
      style: {
        margin: 0,
        fontSize: scale[props.f]
      }
    })
  )
)

Text.defaultProps = {
  is: 'p',
  f: 4
}

const scale = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

export default Text
