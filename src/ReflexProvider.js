import React from 'react'
import contextTypes from './context-types'

class ReflexProvider extends React.Component {
  getChildContext () {
    return {
      reflexbox: this.props
    }
  }

  render () {
    return React.Children.only(this.props.children)
  }
}

ReflexProvider.childContextTypes = contextTypes

export default ReflexProvider
