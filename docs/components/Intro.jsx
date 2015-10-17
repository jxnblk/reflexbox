
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
  <Box py={3}>
    <Flex md align='center' gutter={2}>
      <Box px={2} md={4}>
        <Text color='green' children={p1} />
      </Box>
      <Box px={2} md={4}>
        <Field color='green'>
          <Text caps color='navy' children={p2} />
        </Field>
      </Box>
      <Box px={2} md={4}>
        <CarbonAd />
      </Box>
    </Flex>
  </Box>
)

export default Intro
