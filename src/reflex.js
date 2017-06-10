import React from 'react'
import css from './css'
import defaultConfig from './config'
import contextTypes from './context-types'

const reflex = Component => {
  const Reflex = (props, context) => {
    const config = Object.assign({}, defaultConfig, context.reflexbox)
    const next = css(config)(props)

    return React.createElement(Component, next)
  }

  Reflex.contextTypes = contextTypes

  return Reflex
}

export default reflex
