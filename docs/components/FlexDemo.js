
import React from 'react'
import { Flex, Box } from '../../src'

const propsString = (obj) => {
  let str = ''
  Object.keys(obj).forEach(key => {
    str += `${key}='${obj[key]}' `
  })
  return str
}

const FlexDemo = ({ config, ...props }) => {

  return (
    <div className='max-width-4 mb3'>
      <Flex {...config} className='demo-flex'>
        <Box p={2} col={4} children='Box' className='demo-box' />
        <Box p={2} col={4} children='Box' className='demo-box' />
        <Box p={2} col={4} children='Box' className='demo-box' />
        <Box p={2} col={4} children='Box' className='demo-box' />
        <Box p={2} col={4} children='Box' className='demo-box' />
        <Box p={2} col={4} children='Box' className='demo-box' />
      </Flex>
    </div>
  )
}

FlexDemo.propTypes = {
  config: React.PropTypes.object
}

FlexDemo.defaultProps = {
  config: {
    wrap: false,
    column: false,
    gutter: null,
    align: null,
    justify: null,
    auto: false,
  }
}

export default FlexDemo

