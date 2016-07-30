
import React from 'react'
import { Flex, Box } from '../../src'

const Footer = () => (
  <footer>
    <Flex align='flex-end' py={3}>
      <Box auto p={3}>
        <a href='//github.com/jxnblk/reflexbox'
          className='bold text-decoration-none inline-block p2 rounded dark-blue bg-white'>
          View on GitHub
        </a>
      </Box>
      <Box p={3}>
        <a href='//jxnblk.com' className='h5 bold dark-blue text-decoration-none'>Made by Jxnblk</a>
      </Box>
    </Flex>
  </footer>
)

export default Footer

