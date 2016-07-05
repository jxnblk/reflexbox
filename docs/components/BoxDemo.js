
import React from 'react'
import { Flex, Box } from '../../src'

const BoxDemo = ({ ...props }) => {
  return (
    <div className='mb3 white'>
      <Flex align='center' justify='space-between' className='demo-flex'>
        <Box p={4} col={7}
          className='demo-box'>
          <h3 className='m0' children='<Box p={4} col={7} />' />
        </Box>
        <Box p={2} col={3} children='Box' className='demo-box' />
        <Box p={2} col={2} children='Box' className='demo-box' />
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

