
import React from 'react'
import Robox from 'robox'
import getMatches from './get-matches'
import config from './config'

const keyMap = {
  server: 'col',
  xsmall: 'col',
  small: 'sm',
  medium: 'md',
  large: 'lg'
}

const getWidth = (props) => ({ media, matches }) => {
  return media.reduce((a, b) => {
    const key = keyMap[b] || b
    return props[key] || a
  }, null) || matches.reduce((a, b) => {
    return props[b] || a
  }, props.col || null)
}

const Reflex = (Comp) => {
  const Base = Robox(Comp)

  class ReflexWrap extends React.Component {
    render () {
      const { ...props } = this.props

      const { breakpoints } = this.context.reflexbox || config
      const { media = [] } = this.context
      const matches = getMatches(breakpoints)

      Object.keys(breakpoints).forEach((key) => {
        delete props[key]
      })

      const width = getWidth(this.props)({
        media, matches
      })

      // Map legacy props
      if (props.column) {
        props.flexColumn = props.column
        delete props.column
      }

      if (props.auto) {
        props.flexAuto = props.auto
        delete props.auto
      }

      return <Base {...props} col={width} />
    }
  }

  ReflexWrap.contextTypes = {
    reflexbox: React.PropTypes.shape({
      breakpoints: React.PropTypes.object
    }),
    // Supoort for react-media-context
    media: React.PropTypes.array
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
    lg: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    is: (props, propName, componentName) => {
      if (props[propName]) {
        return new Error(
          'Warning! Deprecated prop `' + propName + '` supplied to' +
            ' `' + componentName + '`. Use the Reflex higher order component instead. https://github.com/jxnblk/reflexbox/'
        )
      }
    }
  }

  return ReflexWrap
}

export default Reflex

