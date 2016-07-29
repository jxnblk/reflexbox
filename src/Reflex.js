
import React from 'react'
import Robox from 'robox'
import getMatches from './util/get-matches'
import config from './config'

/**
 * Higher order component for adding style prop helpers.
 */

const Reflex = (Comp) => {
  const Base = Robox(Comp)

  class Wrapped extends React.Component {
    constructor () {
      super()
      this.state = {
        matches: []
      }
      this.match = this.match.bind(this)
    }

    componentDidMount () {
      this.match()
    }

    componentWillReceiveProps () {
      this.match()
    }

    match () {
      const { breakpoints } = this.context.reflexbox || {}
      const matches = getMatches(breakpoints)
      this.setState({ matches })
    }

    render () {
      const { breakpoints } = this.context.reflexbox || config
      const { matches } = this.state
      const {
        col,
        ...props
      } = this.props

      Object.keys(breakpoints).forEach((key) => {
        delete props[key]
      })

      const currentCol = matches.reduce((a, b) => this.props[b] || a, col)

      return <Base {...props} col={currentCol} />
    }
  }

  Wrapped.contextTypes = {
    reflexbox: React.PropTypes.shape({
      breakpoints: React.PropTypes.object
    })
  }

  return Wrapped
}

export default Reflex

