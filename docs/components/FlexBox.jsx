
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const FlexBox = () => (
  <Box py={4}>
    <Box py={2}>
      <Rect color='purple'>
        <Flex md align='center' gutter={2}>
          <Box px={2} md={6}>
            <Heading color='purple' children='<Flex />' />
          </Box>
          <Box px={2} md={6}>
            <Heading color='purple' children='<Box />' />
          </Box>
        </Flex>
      </Rect>
    </Box>
    <Box py={2}>
      <Field color='purple' center>
        <Text color='white' children='Flexbox layout completely encapsulated in two components to keep layout styles from leaking into other components' />
      </Field>
    </Box>
  </Box>
)

export default FlexBox
