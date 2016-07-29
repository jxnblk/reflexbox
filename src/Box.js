
import React from 'react'
import Reflex from './Reflex'

/**
 * Sets margin, padding, and width and works independently or as a child of <Flex />.
 */

const Box = ({ is = 'div', className, ...props }) => {
  const Base = Reflex(is)
  const cx = 'Box' + (className ? ' ' + className : '')

  // Map legacy props
  props.flexAuto = props.auto
  delete props.auto

  return <Base {...props} className={cx} />
}

Box.propTypes = {
  /** Sets flex: 1 1 auto */
  auto: React.PropTypes.bool,
  /** Sets flex: none */
  flexNone: React.PropTypes.bool,
  /** Sets display: flex */
  flex: React.PropTypes.bool,
  /** Sets order */
  order: React.PropTypes.number,
  /** Sets width and flex-basis based on a 12 column grid */
  col: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
}

export default Box

