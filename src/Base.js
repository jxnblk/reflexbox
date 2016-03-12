
import React from 'react'
import config from './config'
import margin from './util/margin'
import padding from './util/padding'

const Base = ({
  style,
  className,
  _style,
  _className,
  ...props
}, { reflexbox }) => {
  const { scale } = { ...config, ...reflexbox }

  const sx = {
    ...{},
    ...style,
    ..._style,
    ...margin(props, scale),
    ...padding(props, scale)
  }

  const cx = className ? `${_className} ${className}` : _className

  return (
    <div {...props}
      style={sx}
      className={cx} />
  )
}

Base.propTypes = {
  /** Sets negative left and right margins to compensate for child component padding */
  gutter: React.PropTypes.number,
}

Base.contextTypes = {
  reflexbox: React.PropTypes.shape({
    breakpoints: React.PropTypes.object,
    scale: React.PropTypes.array
  })
}

export default Base

