
import React from 'react'
import styles from './styles'

/**
 * Creates a flexbox context to control layout of children.
 */

const Flex = ({
  wrap,
  column,
  align,
  justify,
  gutter,
  auto,
  style,
  className,
  ...props
}) => {

  let display = 'flex'
  const { breakpoints, scale } = styles

  if (typeof window !== 'undefined') {
    Object.keys(breakpoints).forEach(key => {
      if (Object.keys(props).includes(key)) {
        display = 'block'
      }
    })
    Object.keys(breakpoints).forEach(key => {
      if (props[key] && window.matchMedia(breakpoints[key]).matches) {
        display = 'flex'
      }
    })
  }

  const sx = Object.assign({}, style, {
    display,
    flexWrap: wrap ? 'wrap' : null,
    flexDirection: column ? 'column' : null,
    flex: auto ? '1 1 auto' : null,
    alignItems: align || null,
    justifyContent: justify || null,
    marginLeft: gutter ? -scale[gutter] : null,
    marginRight: gutter ? -scale[gutter] : null
  })

  const cx = className ? `Flex ${className}` : 'Flex'

  return <div
    {...props}
    style={sx}
    className={cx} />
}

const scaleIndexes = Array.from({ length: styles.scale.length }, (s, i) => i)

Flex.propTypes = {
  /** Sets flex-wrap: wrap */
  wrap: React.PropTypes.bool,
  /** Sets flex-direction: column */
  column: React.PropTypes.bool,
  /** Sets negative left and right margins to compensate for <Box /> padding */
  gutter: React.PropTypes.oneOf(scaleIndexes),
  /** Sets align-item */
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
  auto: React.PropTypes.bool
}

export default Flex

