
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'

const Pad = () => (
  <Box py={4}>
    <Field pad={4} color='pink'>
      <Heading children='pad' />
    </Field>
  </Box>
)

export default Pad
