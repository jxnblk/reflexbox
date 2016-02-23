
import React from 'react'
import { Flex, Box } from '../../src'

const propsString = (obj) => {
  let str = ''
  Object.keys(obj).forEach(key => {
    str += `${key}='${obj[key]}' `
  })
  return str
}

const BoxDemo = ({ config, ...props }) => {

  return (
    <div className='max-width-4 mb3'>
      <Flex className='demo-flex'>
        <Box {...config} children='Box' className='demo-box' />
        <Box {...config} children='Box' className='demo-box' />
        <Box {...config} children='Box' className='demo-box' />
        <Box {...config} children='Box' className='demo-box' />
        <Box {...config} children='Box' className='demo-box' />
        <Box {...config} children='Box' className='demo-box' />
      </Flex>
    </div>
  )
}

BoxDemo.propTypes = {
  config: React.PropTypes.object
}

BoxDemo.defaultProps = {
  config: {
    auto: false,
    p: 3
  }
}

export default BoxDemo

