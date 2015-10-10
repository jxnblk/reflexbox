
import React from 'react'
import scale from './scale'
import styleNormalizer from 'react-style-normalizer'

const { bool, oneOf } = React.PropTypes

const Flex = ({
  wrap,
  column,
  align,
  justify,
  sm,
  md,
  lg,
  ...props
}) => {

  const style = styleNormalizer({
    display: 'flex',
    flexWrap: wrap ? 'wrap' : null,
    flexDirection: column ? 'column' : null,
    alignItems: align || null,
    justifyContent: justify || null,
  })

  return <div
    {...props}
    style={style}
    className='Flex' />
}

Flex.propTypes = {
  wrap: bool,
  column: bool,
  sm: bool,
  md: bool,
  lg: bool,
  align: oneOf([
    'stretch',
    'center',
    'baseline',
    'flex-start',
    'flex-end',
  ]),
  justify: oneOf([
    'center',
    'space-around',
    'space-between',
    'flex-start',
    'flex-end',
  ])
}

export default Flex
