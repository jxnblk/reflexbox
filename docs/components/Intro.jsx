
import React from 'react'
import { CarbonAd } from 'blk'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Text from './Text'

const p1 = `
Reflexbox is a React grid system composed of the
<Flex /> and <Box /> components.
The Flex component creates a flexbox context and
controls direction, alignment, justification, and gutter compensation.
The Box component controls padding, flex-basis, and width.
With breakpoint-based responsive styles,
these two components can handle virtually all layout styling needs.
`

const p2 = `
These components are tested with React’s shallow rendering
as well as browser tests in Karma at four different breakpoints.
`

const Intro = () => (
  <Box p={3}>
    <Flex md align='center' gutter={2}>
      <Box px={2} md={4}>
        <Text color='navy' children={p1} />
      </Box>
      <Box px={2} md={4}>
        <Rect p={2} color='blue'>
          <Text caps color='navy' children={p2} />
        </Rect>
      </Box>
      <Box px={2} md={4}>
        <CarbonAd />
      </Box>
    </Flex>
  </Box>
)

export default Intro
