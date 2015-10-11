
import React from 'react'
import scale from './scale'

const Box = ({
  p,
  px,
  py,
  pt,
  pb,
  pl,
  pr,
  fill,
  ...props
}) => {

  const style = {
    flex: fill ? '1 1 auto' : null,
    padding: p ? scale[p] : null,
    paddingTop:    py ? scale[py] : (pt ? scale[pt] : null),
    paddingBottom: py ? scale[py] : (pb ? scale[pb] : null),
    paddingLeft:   px ? scale[px] : (pl ? scale[pl] : null),
    paddingRight:  px ? scale[px] : (pr ? scale[pr] : null),
  }

  return <div
    {...props}
    style={style}
    className='Box' />
}

const { bool, oneOf } = React.PropTypes
// const values = Array.from({ length: scale.length }, (a, b) => b)
Box.propTypes = {
  fill: bool,
  p: oneOf([0, 1, 2, 3, 4]),
  px: oneOf([0, 1, 2, 3, 4]),
  py: oneOf([0, 1, 2, 3, 4]),
  pt: oneOf([0, 1, 2, 3, 4]),
  pb: oneOf([0, 1, 2, 3, 4]),
  pl: oneOf([0, 1, 2, 3, 4]),
  pr: oneOf([0, 1, 2, 3, 4]),
}

export default Box

