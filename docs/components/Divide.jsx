
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Divide = () => (
  <Box p={3}>
    <Field px={4} py={3} color='purple'>
      <Box py={4}>
        <Box pb={3}>
          <Rect p={2} color='blue'>
            <Heading color='white' children='Divide' />
          </Rect>
        </Box>
        <Flex align='center' gutter={2}>
          <Box px={2} col={5}>
            <Field color='blue' p={2}>
              <Text small caps color='white' children='<Box col={5} />' />
            </Field>
          </Box>
          <Box px={2} col={7}>
            <Rect color='blue' p={2}>
              <Text small caps color='blue' children='<Box col={7} />' />
            </Rect>
          </Box>
        </Flex>
      </Box>
    </Field>
  </Box>
)

export default Divide
