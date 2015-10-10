
import React from 'react'
import scale from './scale'

const { oneOf } = React.PropTypes
const values = Array.from({ length: scale.length }, (a, b) => b)

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

Box.propTypes = {
  p: oneOf(values),
  px: oneOf(values),
  py: oneOf(values),
  pt: oneOf(values),
  pb: oneOf(values),
  pl: oneOf(values),
  pr: oneOf(values)
}

export default Box

