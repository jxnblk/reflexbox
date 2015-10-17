
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Stack = () => (
  <Box p={3}>
    <Field px={3} py={4} color='aqua'>
      <Flex column>
        <Box py={2}>
          <Heading color='navy' children='Stack' />
        </Box>
        <Box py={2}>
          <Field color='green' p={2}>
            <Text small caps color='navy' children='<Flex column />' />
          </Field>
        </Box>
        <Box py={2}>
          <Field color='green' p={2}>
            <Text small caps color='navy' children='<Flex column />' />
          </Field>
        </Box>
        <Box py={2}>
          <Field color='navy' p={2}>
            <Text small caps color='white' children='<Flex column />' />
          </Field>
        </Box>
      </Flex>
    </Field>
  </Box>
)

export default Stack
