
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Respond = () => (
  <Field p={4} color='pink'>
    <Box py={4}>
      <Flex wrap align='center' gutter={2}>
        <Box p={2}>
          <Field color='blue' p={3} />
        </Box>
        <Box p={2}>
          <Field color='blue' p={3} />
        </Box>
        <Box fill px={2}>
          <Rect p={2} color='blue'>
            <Heading color='blue' children='Respond' />
          </Rect>
        </Box>
        <Box p={2}>
          <Field color='blue' p={3} />
        </Box>
      </Flex>
      <Flex wrap align='center' gutter={2}>
        <Box p={2} col={6} md={4} lg={3}>
          <Field color='blue' p={2}>
            <Text small caps color='pink' children='<Box col={6} md={4} lg={3} />' />
          </Field>
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2}>
            <Text small caps color='blue' children='<Box col={6} md={4} lg={3} />' />
          </Rect>
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
        <Box p={2} col={6} md={4} lg={3}>
          <Rect color='blue' p={2} />
        </Box>
      </Flex>
    </Box>
  </Field>
)

export default Respond
