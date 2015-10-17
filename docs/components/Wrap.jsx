
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Wrap = () => (
  <Box p={3}>
    <Field px={3} py={4} color='navy'>
      <Flex wrap align='center' justify='space-between'>
        <Box px={2}>
          <Heading color='pink' children='Wrap' />
        </Box>
        <Box>
          <Field color='pink' p={2}>
            <Text small caps color='white' children='<Flex wrap />' />
          </Field>
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
        <Box p={2}>
          <Field color='pink' px={4} py={2} />
        </Box>
      </Flex>
    </Field>
  </Box>
)

export default Wrap
