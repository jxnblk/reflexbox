
import React from 'react'
import Reflex from './Reflex'

// OR use Box component
const Base = Reflex('div')

const Grid = ({ className, ...props }) => {
  const cx = 'Grid' + (className ? ' ' + className : '')

  return <Base inlineBlock {...props} className={cx} />
}

export default Grid

