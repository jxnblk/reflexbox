
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
these two components can handle virtually any layout composition.
`

const p2 = `
These components are tested with React’s shallow rendering
as well as browser tests in Karma at four different breakpoints.
`

const Intro = () => (
  <Box px={3} pt={4} pb={3}>
    <Field p={2} color='aqua'>
      <Flex md align='center'>
        <Box p={2} md={6} lg={4}>
          <CarbonAd />
        </Box>
        <Box md={6} lg={8}>
          <Field p={2} color='navy'>
            <Flex lg align='center'>
              <Box lg={8}>
                <Text color='white' children={p1} />
              </Box>
              <Box p={2} lg={4}>
                <Rect p={2} color='aqua'>
                  <Text color='white' children={p2} />
                </Rect>
              </Box>
            </Flex>
          </Field>
        </Box>
      </Flex>
    </Field>
  </Box>
)

export default Intro
