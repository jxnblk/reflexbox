
import React from 'react'
import Reflex from './Reflex'

const Base = Reflex()('div')

const Box = ({ className, ...props }) => {
  const cx = 'Box' + (className ? ' ' + className : '')

  return <Base {...props} className={cx} />
}

export default Box

