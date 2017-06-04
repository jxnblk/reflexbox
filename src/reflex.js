import React from 'react'
import parse from './parse'
import config from './config'

const reflex = Component => {
  const Reflex = (_props, context) => {
    const props = parse(config)(_props)

    return React.createElement(Component, props)
  }

  return Reflex
}

export default reflex
