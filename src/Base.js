
import React from 'react'
import assign from 'object-assign'
import config from './config'
import margin from './util/margin'
import padding from './util/padding'

const Base = ({
  style,
  className,
  is,
  _style,
  _className,
  gutter,
  m, mt, mr, mb, ml, mx, my,
  p, pt, pr, pb, pl, px, py,
  ...props
}, { reflexbox }) => {
  const { scale } = { ...config, ...reflexbox }

  const sx = assign(
    { boxSizing: 'border-box' },
    style,
    _style,
    margin({ gutter, m, mt, mr, mb, ml, mx, my }, scale),
    padding({ p, pt, pr, pb, pl, px, py }, scale)
  )

  const cx = className ? `${_className} ${className}` : _className
  const Component = is || 'div'

  return (
    <Component
      {...props}
      style={sx}
      className={cx} />
  )
}

Base.propTypes = {
  /** Passes in a custom element or component */
  is: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object,
    React.PropTypes.func
  ]),
  _className: React.PropTypes.string,
  _style: React.PropTypes.object,

  /** Sets padding based on a scale of 0–4 */
  m: React.PropTypes.number,
  /** Sets padding-left and padding-right based on a scale of 0–4 */
  mx: React.PropTypes.number,
  /** Sets margin-top and margin-bottom based on a scale of 0–4 */
  my: React.PropTypes.number,
  /** Sets margin-top based on a scale of 0–4 */
  mt: React.PropTypes.number,
  /** Sets margin-bottom based on a scale of 0–4 */
  mb: React.PropTypes.number,
  /** Sets margin-left based on a scale of 0–4 */
  ml: React.PropTypes.number,
  /** Sets margin-right based on a scale of 0–4 */
  mr: React.PropTypes.number,

  /** Sets negative left and right margins to compensate for child component padding */
  gutter: React.PropTypes.number,

  /** Sets padding based on a scale of 0–4 */
  p: React.PropTypes.number,
  /** Sets padding-left and padding-right based on a scale of 0–4 */
  px: React.PropTypes.number,
  /** Sets padding-top and padding-bottom based on a scale of 0–4 */
  py: React.PropTypes.number,
  /** Sets padding-top based on a scale of 0–4 */
  pt: React.PropTypes.number,
  /** Sets padding-bottom based on a scale of 0–4 */
  pb: React.PropTypes.number,
  /** Sets padding-left based on a scale of 0–4 */
  pl: React.PropTypes.number,
  /** Sets padding-right based on a scale of 0–4 */
  pr: React.PropTypes.number
}

Base.contextTypes = {
  reflexbox: React.PropTypes.shape({
    breakpoints: React.PropTypes.object,
    scale: React.PropTypes.array
  })
}

export default Base

