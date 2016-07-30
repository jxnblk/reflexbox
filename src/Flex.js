
import React from 'react'
import Reflex from './Reflex'

/**
 * Creates a flexbox context to control layout of children.
 */

const Flex = ({ is = 'div', className, ...props }) => {
  const Base = Reflex(is)
  const cx = 'Flex' + (className ? ' ' + className : '')

  // Map legacy props
  if (props.column) {
    props.flexColumn = props.column
    delete props.column
  }

  return <Base flex {...props} className={cx} />
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
    'flex-end'
  ]),
  /** Sets justify-content */
  justify: React.PropTypes.oneOf([
    'center',
    'space-around',
    'space-between',
    'flex-start',
    'flex-end'
  ]),
  /** Sets flex: 1 1 auto */
  auto: React.PropTypes.bool
}

export default Flex

