

import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Col = () => (
  <Field p={4} color='purple'>
    <Box py={4}>
      <Box pb={3}>
        <Rect p={2} color='navy'>
          <Heading color='navy' children='Divide' />
        </Rect>
      </Box>
      <Flex align='center' gutter={2}>
        <Box px={2} col={5}>
          <Field color='blue' p={2}>
            <Text caps color='pink' children='<Box col={5} />' />
          </Field>
        </Box>
        <Box px={2} col={7}>
          <Rect color='red' p={2}>
            <Text caps color='navy' children='<Box col={7} />' />
          </Rect>
        </Box>
      </Flex>
    </Box>
  </Field>
)

export default Col
