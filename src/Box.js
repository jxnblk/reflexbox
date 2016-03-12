
import React from 'react'
import assign from 'object-assign'
import Base from './Base'
import config from './config'
import margin from './util/margin'
import padding from './util/padding'

/**
 * Sets margin, padding, and width and works independently or as a child of <Flex />.
 */

const Box = ({
  flex,
  auto,
  align,
  order,
  col,
  ...props
}, { reflexbox }) => {

  const { breakpoints, scale } = { ...config, ...reflexbox }

  function w(n) {
    return n ? (n / 12 * 100) + '%' : null
  }

  let width = w(col)

  if (typeof window !== 'undefined') {
    Object.keys(breakpoints).forEach(key => {
      if (props[key] && window.matchMedia(breakpoints[key]).matches) {
        width = w(props[key]) || width
      }
    })
  }

  const sx = assign(
    {},
    auto ? { flex: '1 1 auto' } : null,
    flex ? { display: 'flex' } : null,
    align ? { alignSelf: align } : null,
    order ? { order } : null,
    width ? { width } : null,
    width ? { flexBasis: width } : null
  )

  return (
    <Base
      {...props}
      _style={sx}
      _className='Box' />
  )
}

Box.propTypes = {
  /** Sets flex: 1 1 auto */
  auto: React.PropTypes.bool,
  /** Sets display: flex */
  flex: React.PropTypes.bool,
  /** Sets align-self */
  align: React.PropTypes.oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end',
  ]),
  /** Sets order */
  order: React.PropTypes.number,
  /** Sets width and flex-basis based on a 12 column grid */
  col: React.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

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

Box.contextTypes = {
  reflexbox: React.PropTypes.shape({
    breakpoints: React.PropTypes.object,
    scale: React.PropTypes.array
  })
}

export default Box

