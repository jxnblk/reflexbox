
import React from 'react'
import styles from './styles'

const Flex = ({
  wrap,
  column,
  align,
  justify,
  gutter,
  sm,
  md,
  lg,
  stretch,
  style,
  className,
  ...props
}) => {

  let display
  const { breakpoints, scale } = styles

  if (typeof window !== 'undefined') {
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
  } else {
    display = 'flex'
  }

  const sx = Object.assign({}, style, {
    display,
    flexWrap: wrap ? 'wrap' : null,
    flexDirection: column ? 'column' : null,
    flex: stretch ? '1 1 auto' : null,
    alignItems: align || null,
    justifyContent: justify || null,
    marginLeft: gutter ? -scale[gutter] : null,
    marginRight: gutter ? -scale[gutter] : null
  })

  return <div
    {...props}
    style={sx}
    className={className ? `Flex ${className}` : 'Flex'} />
}

Flex.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  wrap: React.PropTypes.bool,
  column: React.PropTypes.bool,
  sm: React.PropTypes.bool,
  md: React.PropTypes.bool,
  lg: React.PropTypes.bool,
  gutter: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
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
  stretch: React.PropTypes.bool
}

Flex.defaultProps = {
  style: {}
}

export default Flex

