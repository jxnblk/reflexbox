
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const MicroMacro = () => (
  <Box py={4}>
    <Field pad={4} color='yellow'>
      <Box py={2}>
        <Flex sm align='center' gutter={3}>
          <Box px={3}>
            <Field color='orange' center pad={2}>
              <Heading color='red' children='Micro' />
            </Field>
          </Box>
          <Box px={3}>
            <Heading center color='orange' children='+' />
          </Box>
          <Box px={3} fill>
            <Field color='orange' center pad={4}>
              <Heading color='red' children='Macro' />
            </Field>
          </Box>
        </Flex>
      </Box>
      <Box py={2}>
        <Text center caps
          color='orange'
          children='Works well for both micro and macro layout considerations' />
      </Box>
    </Field>
  </Box>
)

export default MicroMacro
