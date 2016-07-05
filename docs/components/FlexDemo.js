
import React from 'react'
import { Flex, Box } from '../../src'

const FlexDemo = ({ ...props }) => {
  return (
    <div className='mb3 white'>
      <Flex align='center' className='demo-flex'>
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

export default FlexDemo

