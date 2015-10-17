
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Justify = () => (
  <Field p={4} color='green'>
    <Box pb={4}>
    </Box>
    <Box py={2}>
      <Flex align='center' justify='space-between'>
        <Field color='navy' p={3} />
        <Heading center color='white' children='Justify' />
        <Field color='white' p={2}>
          <Text small caps color='green' children="<Flex justify='space-between'/>" />
        </Field>
        <Field color='navy' p={3} />
        <Field color='navy' p={3} />
      </Flex>
    </Box>
    <Box py={2}>
      <Flex align='center' justify='space-around'>
        <Field color='navy' p={3} />
        <Field color='white' p={2}>
          <Text small caps color='green' children="<Flex justify='space-around'/>" />
        </Field>
        <Field color='navy' p={3} />
        <Field color='navy' p={3} />
      </Flex>
    </Box>
    <Box py={2}>
      <Flex align='center' justify='center'>
        <Field color='navy' p={3} />
        <Field color='white' p={2}>
          <Text small caps color='green' children="<Flex justify='center'/>" />
        </Field>
        <Field color='navy' p={3} />
        <Field color='navy' p={3} />
      </Flex>
    </Box>
  </Field>
)

export default Justify
