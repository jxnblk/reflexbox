
import React from 'react'
import Robox from 'robox'
import getMatches from './util/get-matches'
import config from './config'

/**
 * Higher order component for adding style prop helpers.
 */

const Reflex = (Comp) => {
  const Base = Robox(Comp)

  class ReflexWrap extends React.Component {
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

      const currentCol = matches.reduce((a, b) => this.props[b] || a, col || null)

      // Map legacy props
      if (props.column) {
        props.flexColumn = props.column
        delete props.column
      }

      if (props.auto) {
        props.flexAuto = props.auto
        delete props.auto
      }

      return <Base {...props} col={currentCol} />
    }
  }

  ReflexWrap.contextTypes = {
    reflexbox: React.PropTypes.shape({
      breakpoints: React.PropTypes.object
    })
  }

  ReflexWrap.propTypes = {
    flex: React.PropTypes.bool,
    wrap: React.PropTypes.bool,
    flexColumn: React.PropTypes.bool,
    column: React.PropTypes.bool,
    align: React.PropTypes.oneOf([
      'stretch',
      'center',
      'baseline',
      'flex-start',
      'flex-end'
    ]),
    justify: React.PropTypes.oneOf([
      'center',
      'space-around',
      'space-between',
      'flex-start',
      'flex-end'
    ]),
    flexAuto: React.PropTypes.bool,
    auto: React.PropTypes.bool,
    flexNone: React.PropTypes.bool,
    order: React.PropTypes.number,
    col: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    sm: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    md: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    lg: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  }

  return ReflexWrap
}

export default Reflex

