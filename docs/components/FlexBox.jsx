
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const FlexBox = () => (
  <Box pt={4}>
    <Box px={3} py={4}>
      <Rect p={3} color='purple'>
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
    <Field py={4} color='purple' center>
      <Flex justify='center'>
        <Box p={4} md={8}>
          <Text caps color='black' children='Flexbox layout completely encapsulated in two components to keep layout styles from leaking into other components' />
        </Box>
      </Flex>
    </Field>
  </Box>
)

export default FlexBox
