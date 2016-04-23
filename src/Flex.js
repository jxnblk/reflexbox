
import React from 'react'
import assign from 'object-assign'
import Base from './Base'
import config from './config'

const defaultBreakPoints = Object.keys(config.breakpoints)

/**
 * Creates a flexbox context to control layout of children.
 */

const Flex = ({
  wrap,
  column,
  align,
  justify,
  auto,
  ...props
}, { reflexbox }) => {

  let display = 'flex'
  const { breakpoints } = reflexbox ? { ...config, ...reflexbox } : config

  if (typeof window !== 'undefined') {
    const b = reflexbox ? Object.keys(breakpoints) : defaultBreakPoints
    b.forEach(key => {
      if (key in props) {
        display = 'block'
      }
    })
    b.forEach(key => {
      if (props[key] && window.matchMedia(breakpoints[key]).matches) {
        display = 'flex'
      }
    })
  }

  const sx = assign(
    display ? { display } : null,
    wrap ? { flexWrap: 'wrap' } : null,
    column ? { flexDirection: 'column' } : null,
    auto ? { flex: '1 1 auto' } : null,
    align ? { alignItems: align } : null,
    justify ? { justifyContent: justify } : null
  )

  return (
    <Base
      {...props}
      _style={sx}
      _className='Flex' />
  )
}

Flex.propTypes = {
  /** Sets flex-wrap: wrap */
  wrap: React.PropTypes.bool,
  /** Sets flex-direction: column */
  column: React.PropTypes.bool,
  /** Sets negative left and right margins to compensate for <Box /> padding */
  gutter: React.PropTypes.number,
  /** Sets align-items */
  align: React.PropTypes.oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end',
  ]),
  /** Sets justify-content */
  justify: React.PropTypes.oneOf([
    'center',
    'space-around',
    'space-between',
    'flex-start',
    'flex-end',
  ]),
  /** Sets flex: 1 1 auto */
  auto: React.PropTypes.bool,
  /** Passes in a custom element or component */
  is: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.func
  ])
}

Flex.contextTypes = {
  reflexbox: React.PropTypes.shape({
    breakpoints: React.PropTypes.object,
    scale: React.PropTypes.array
  })
}

export default Flex
