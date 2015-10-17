
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Fill = () => (
  <Field p={4} color='red'>
    <Flex align='center' gutter={3}>
      <Box fill>
        <Field color='white' p={4}>
          <Text caps color='red' children='<Box fill/>' />
        </Field>
      </Box>
      <Box px={4}>
        <Heading color='white' children='Fill' />
      </Box>
    </Flex>
  </Field>
)

export default Fill
