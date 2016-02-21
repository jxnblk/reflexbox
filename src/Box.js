
import React from 'react'
import styles from './styles'


const Box = ({
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  flex,
  auto,
  col,
  sm,
  md,
  lg,
  style,
  className,
  ...props
}) => {

  const { breakpoints, scale } = styles

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

  const sx = Object.assign({}, style, {
    boxSizing: 'border-box',
    flex: auto ? '1 1 auto' : null,
    display: flex ? 'flex' : null,
    padding: p ? scale[p] : null,
    paddingTop:    py ? scale[py] : (pt ? scale[pt] : null),
    paddingBottom: py ? scale[py] : (pb ? scale[pb] : null),
    paddingLeft:   px ? scale[px] : (pl ? scale[pl] : null),
    paddingRight:  px ? scale[px] : (pr ? scale[pr] : null),
    width: width,
    flexBasis: width
  })

  return <div
    {...props}
    style={sx}
    className={className ? `Box ${className}` : 'Box'} />
}

Box.propTypes = {
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  auto: React.PropTypes.bool,
  flex: React.PropTypes.bool,
  col: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  sm: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  md: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  lg: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  p: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  px: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  py: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  pt: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  pb: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  pl: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
  pr: React.PropTypes.oneOf([0, 1, 2, 3, 4]),
}

export default Box

