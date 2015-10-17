
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const FlexBox = () => (
  <Box px={3} py={3}>
    <Field color='blue' px={3} py={4}>
      <Rect p={3} color='aqua' border={4}>
        <Flex md align='center' gutter={2}>
          <Box px={2} md={6}>
            <Heading color='yellow' children='<Flex />' />
          </Box>
          <Box px={2} md={6}>
            <Heading color='yellow' children='<Box />' />
          </Box>
        </Flex>
      </Rect>
      <Flex justify='center'>
        <Box pt={3} md={8}>
          <Text center caps color='yellow' children='Flexbox layout completely encapsulated in two components to keep layout styles from leaking into other components' />
        </Box>
      </Flex>
    </Field>
  </Box>
)

export default FlexBox
