
import React from 'react'
import { breakpoints, scale } from './styles'

const Box = ({
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  stretch,
  col,
  sm,
  md,
  lg,
  ...props
}) => {

  function w(n) {
    return n ? (n / 12 * 100) + '%' : null
  }

  let width = w(col)

  if (typeof window !== 'undefined') {
    width = w(col)
    if (window.matchMedia(breakpoints.sm).matches) {
      width = w(sm) || width
    }
    if (window.matchMedia(breakpoints.md).matches) {
      width = w(md) || width
    }
    if (window.matchMedia(breakpoints.lg).matches) {
      width = w(lg) || width
    }
  }

  const style = {
    boxSizing: 'border-box',
    flex: stretch ? '1 1 auto' : null,
    padding: p ? scale[p] : null,
    paddingTop:    py ? scale[py] : (pt ? scale[pt] : null),
    paddingBottom: py ? scale[py] : (pb ? scale[pb] : null),
    paddingLeft:   px ? scale[px] : (pl ? scale[pl] : null),
    paddingRight:  px ? scale[px] : (pr ? scale[pr] : null),
    width: width,
    flexBasis: width
  }

  return <div
    {...props}
    style={style}
    className='Box' />
}

const { bool, oneOf } = React.PropTypes

Box.propTypes = {
  stretch: bool,
  col: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  p: oneOf([0, 1, 2, 3, 4]),
  px: oneOf([0, 1, 2, 3, 4]),
  py: oneOf([0, 1, 2, 3, 4]),
  pt: oneOf([0, 1, 2, 3, 4]),
  pb: oneOf([0, 1, 2, 3, 4]),
  pl: oneOf([0, 1, 2, 3, 4]),
  pr: oneOf([0, 1, 2, 3, 4]),
}

export default Box

