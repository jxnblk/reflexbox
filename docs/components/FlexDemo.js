
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
    <div className='mb3 white'>
      <Flex justify='stretch' align='center' className='demo-flex'>
        <Box p={3} col={8}>
          <h3 className='m0'>
            {'<Flex align=\'center\' />'}
          </h3>
        </Box>
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

