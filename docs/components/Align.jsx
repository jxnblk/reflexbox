
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Align = () => (
  <Field p={4} color='blue'>
    <Box py={2}>
      <Flex align='center' gutter={3}>
        <Box fill>
          <Field color='aqua' px={3} py={4}>
            <Text center small caps color='yellow' children="<Flex align='center' />" />
          </Field>
        </Box>
        <Box px={3}>
          <Heading color='aqua' children='Align' />
        </Box>
      </Flex>
    </Box>
    <Box py={2}>
      <Flex align='baseline' gutter={3}>
        <Box fill>
          <Field color='aqua' px={3} py={4}>
            <Text center small caps color='yellow' children="<Flex align='baseline' />" />
          </Field>
        </Box>
        <Box px={3}>
          <Heading level={3} color='aqua' children='Baseline' />
        </Box>
      </Flex>
    </Box>
    <Box py={2}>
      <Flex align='flex-start' gutter={3}>
        <Box fill>
          <Field color='aqua' px={3} py={4}>
            <Text center small caps color='yellow' children="<Flex align='flex-start' />" />
          </Field>
        </Box>
        <Box px={3}>
          <Heading level={3} color='aqua' children='Flex-start' />
        </Box>
      </Flex>
    </Box>
    <Box py={2}>
      <Flex align='flex-end' gutter={3}>
        <Box fill>
          <Field color='aqua' px={3} py={4}>
            <Text center small caps color='yellow' children="<Flex align='flex-end' />" />
          </Field>
        </Box>
        <Box px={3}>
          <Heading level={3} color='aqua' children='Flex-end' />
        </Box>
      </Flex>
    </Box>
  </Field>
)

export default Align
