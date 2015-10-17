
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Fill = () => (
  <Box p={3}>
    <Field px={3} py={4} color='navy'>
      <Flex align='center'>
        <Box fill>
          <Field color='aqua' px={2} py={4}>
            <Text small caps color='blue' children='<Box fill/>' />
          </Field>
        </Box>
        <Box px={2}>
          <Heading color='white' children='Fill' />
        </Box>
      </Flex>
    </Field>
  </Box>
)

export default Fill
