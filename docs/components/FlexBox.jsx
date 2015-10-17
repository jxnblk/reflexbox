
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'
import Intro from './Intro'

const FlexBox = () => (
  <Box px={3} py={3}>
    <Field color='purple' px={3} py={4}>
      <Intro />
      <Rect p={3} color='white'>
        <Flex md align='center' gutter={2}>
          <Box px={2} md={6}>
            <Heading color='white' children='<Flex />' />
          </Box>
          <Box px={2} md={6}>
            <Heading color='white' children='<Box />' />
          </Box>
        </Flex>
      </Rect>
      <Flex justify='center'>
        <Box p={4} md={8}>
          <Text center caps color='black' children='Flexbox layout completely encapsulated in two components to keep layout styles from leaking into other components' />
        </Box>
      </Flex>
    </Field>
  </Box>
)

export default FlexBox
