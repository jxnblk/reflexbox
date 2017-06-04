import React from 'react'
import PropTypes from 'prop-types'
import css from './css'
import defaultConfig from './config'

const reflex = Component => {
  const Reflex = (props, context) => {
    const config = Object.assign({}, defaultConfig, context.reflexbox)
    const next = css(config)(props)

    return React.createElement(Component, next)
  }

  Reflex.contextTypes = {
    reflexbox: PropTypes.shape({
      breakpoints: PropTypes.array,
      space: PropTypes.array,
    })
  }

  return Reflex
}

export default reflex
