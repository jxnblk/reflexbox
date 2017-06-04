import React from 'react'
import cx from './cx'
import config from './config'

const reflex = (rules = []) => Component => {
  const Reflex = _props => {
    const opts = { ..._props, css: rules }
    const props = cx(config)(opts)

    return React.createElement(Component, props)
  }

  return Reflex
}

export default reflex
