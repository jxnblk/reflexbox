
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
    /*
      if (sm && window.matchMedia(breakpoints.sm).matches) {
        display = 'flex'
      } else if (md && window.matchMedia(breakpoints.md).matches) {
        display = 'flex'
      } else if (lg && window.matchMedia(breakpoints.lg).matches) {
        display = 'flex'
      } else if (sm || md || lg) {
        display = 'block'
      } else {
        display = 'flex'
      }
    */
  } else {
    display = 'flex'
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

Flex.propTypes = {
  wrap: React.PropTypes.bool,
  column: React.PropTypes.bool,
  breakpoint: React.PropTypes.oneOf(Object.keys(styles.breakpoints)),
  gutter: React.PropTypes.oneOf(
    Array.from({ length: styles.scale.length }, (s, i) => i)
  ),
  align: React.PropTypes.oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end',
  ]),
  justify: React.PropTypes.oneOf([
    'center',
    'space-around',
    'space-between',
    'flex-start',
    'flex-end',
  ]),
  auto: React.PropTypes.bool
}

Flex.defaultProps = {
  style: {}
}

export default Flex

