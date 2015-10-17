
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Pad = () => (
  <Field p={4} color='pink'>
    <Flex wrap align='center' justify='space-between' gutter={2}>
      <Box px={2}>
        <Heading children='Pad' />
      </Box>
      <Field color='black' p={3}>
        <Text caps color='pink' children='<Box p={3} />' />
      </Field>
      <Field color='black' px={3}>
        <Text caps color='pink' children='<Box px={3} />' />
      </Field>
      <Field color='black' py={3}>
        <Text caps color='pink' children='<Box py={3} />' />
      </Field>
    </Flex>
  </Field>
)

export default Pad
