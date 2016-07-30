
import React from 'react'
import Reflex from './Reflex'

const Base = Reflex('div')

const Flex = ({ className, ...props }) => {
  const cx = 'Flex' + (className ? ' ' + className : '')

  return <Base {...props} flex className={cx} />
}

export default Flex

