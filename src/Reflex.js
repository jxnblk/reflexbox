
import React from 'react'
import Robox from 'robox'
import getMatches from './util/get-matches'

const Reflex = (Comp) => {
  const BoxComp = Robox(Comp)

  class Wrapped extends React.Component {
    constructor () {
      super()
      this.state = {
        matches: []
      }
    }

    componentDidMount () {
      const matches = getMatches()
      this.setState({ matches })
    }

    componentWillReceiveProps () {
      const matches = getMatches()
      this.setState({ matches })
    }

    render () {
      const { matches } = this.state
      const {
        col,
        ...props
      } = this.props

      delete props.sm
      delete props.md
      delete props.lg

      const currentCol = matches.reduce((a, b) => this.props[b] || a, col)

      return <BoxComp {...props} col={currentCol} />
    }
  }

  return Wrapped
}

export default Reflex

