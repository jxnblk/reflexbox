
import React from 'react'
import { CarbonAd } from 'blk'
import { Flex, Box } from '../../src'

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
  <Box py={3}>
    <Flex md align='center' gutter={2}>
      <Box md={8}>
        <Flex md>
          <Box px={2} md={6}>
            <p>{p1}</p>
          </Box>
          <Box px={2} md={6}>
            <p>{p2}</p>
          </Box>
        </Flex>
      </Box>
      <Box px={2} md={4}>
        <CarbonAd />
      </Box>
    </Flex>
  </Box>
)

export default Intro
