
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const MicroMacro = () => (
  <Box p={3}>
    <Field px={3} py={4} color='yellow'>
      <Box py={2}>
        <Flex sm align='center' gutter={3}>
          <Box px={3}>
            <Field color='pink' center p={2}>
              <Heading level={4} color='yellow' children='Micro' />
            </Field>
          </Box>
          <Box px={3}>
            <Heading center color='pink' children='+' />
          </Box>
          <Box px={3} fill>
            <Field color='pink' center py={4}>
              <Heading color='yellow' children='Macro' />
            </Field>
          </Box>
        </Flex>
      </Box>
      <Box py={2}>
        <Text center caps
          color='blue'
          children='Works well for both micro and macro layout considerations' />
      </Box>
    </Field>
  </Box>
)

export default MicroMacro
