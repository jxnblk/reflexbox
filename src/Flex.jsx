
import React from 'react'
import scale from './scale'
import styleNormalizer from 'react-style-normalizer'

const { bool, oneOf } = React.PropTypes

const breakpoints = {
  sm: '(min-width: 32em)',
  md: '(min-width: 48em)',
  lg: '(min-width: 64em)'
}

const Flex = ({
  wrap,
  column,
  align,
  justify,
  sm,
  md,
  lg,
  ...props
}) => {

  let display

  if (typeof window != undefined) {
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

  const style = styleNormalizer({
    display,
    flexWrap: wrap ? 'wrap' : null,
    flexDirection: column ? 'column' : null,
    alignItems: align || null,
    justifyContent: justify || null,
  })

  return <div
    {...props}
    style={style}
    className='Flex' />
}

Flex.propTypes = {
  wrap: bool,
  column: bool,
  sm: bool,
  md: bool,
  lg: bool,
  align: oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end',
  ]),
  justify: oneOf([
    'center',
    'space-around',
    'space-between',
    'flex-start',
    'flex-end',
  ])
}

export default Flex

