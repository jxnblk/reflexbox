
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Stack = () => (
  <Field p={4} color='aqua'>
    <Flex column>
      <Box py={2}>
        <Heading color='navy' children='Stack' />
      </Box>
      <Box py={2}>
        <Field color='green' p={2}>
          <Heading level={3} caps color='navy' children='<Flex column />' />
        </Field>
      </Box>
      <Box py={2}>
        <Field color='green' p={2}>
          <Heading level={3} caps color='navy' children='<Flex column />' />
        </Field>
      </Box>
      <Box py={2}>
        <Field color='green' p={2}>
          <Heading level={3} caps color='navy' children='<Flex column />' />
        </Field>
      </Box>
    </Flex>
  </Field>
)

export default Stack
