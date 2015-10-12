
import React from 'react'
import { Flex, Box } from '../src'
import Data from './Data'

const FlexDemos = ({ data, ...props }) => (
  <Box>
    <h2>Flex component</h2>
    <Data {...data} />
    <Box py={3}>
      <h3>Flex component</h3>
      <p>The Flex component creates a flexbox context for all children.</p>
      <Flex>
        <h1 className='m2'>Flex h1</h1>
        <Box p={2}>Box</Box>
      </Flex>
    </Box>
    <Box py={3}>
      <h3>Flex align</h3>
      <p>The align prop sets the align-items property</p>
      <Flex align='center'>
        <h1 className='m2'>Flex align='center'</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <Flex align='baseline'>
        <h1 className='m2'>Flex align='baseline'</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <Flex align='flex-start'>
        <h1 className='m2'>Flex align='flex-start'</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <Flex align='flex-end'>
        <h1 className='m2'>Flex align='flex-end'</h1>
        <Box px={2}>Box</Box>
      </Flex>
    </Box>
    <Box py={3}>
      <h3>Flex justify</h3>
      <p>The justify prop sets the justify-content property</p>
      <Flex justify='center'>
        <h1 className='m2'>Flex justify='center'</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <Flex justify='space-around'>
        <h1 className='m2'>Flex justify='space-around'</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <Flex justify='space-between'>
        <h1 className='m2'>Flex justify='space-between'</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <Flex justify='flex-start'>
        <h1 className='m2'>Flex justify='flex-start'</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <Flex justify='flex-end'>
        <h1 className='m2'>Flex justify='flex-end'</h1>
        <Box px={2}>Box</Box>
      </Flex>
    </Box>
    <Box py={3}>
      <h3>Flex column</h3>
      <p>The column prop sets flex-direction column</p>
      <Flex column>
        <h1 className='m2'>Flex column</h1>
        <Box px={2}>Box</Box>
      </Flex>
    </Box>
    <Box py={3}>
      <h3>Flex wrap</h3>
      <p>The wrap prop sets flex-wrap wrap</p>
      <Flex wrap>
        <h1 className='m2'>Flex wrap</h1>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
        <Box px={4} py={2}>Box</Box>
      </Flex>
    </Box>
    <Box py={3}>
      <h3>Flex sm, md, lg</h3>
      <p>The sm prop only sets display flex above the small breakpoint</p>
      <Flex sm>
        <h1 className='m2'>Flex sm</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <p className='mt2'>The md prop only sets display flex above the medium breakpoint</p>
      <Flex md>
        <h1 className='m2'>Flex md</h1>
        <Box px={2}>Box</Box>
      </Flex>
      <p className='mt2'>The lg prop only sets display flex above the large breakpoint</p>
      <Flex lg>
        <h1 className='m2'>Flex lg</h1>
        <Box px={2}>Box</Box>
      </Flex>
    </Box>
  </Box>
)

export default FlexDemos

