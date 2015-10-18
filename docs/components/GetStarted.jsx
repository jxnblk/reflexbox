
import React from 'react'
import { Flex, Box } from '../../src'
import Field from './Field'
import Rect from './Rect'
import Heading from './Heading'
import Text from './Text'
import Link from './Link'

const GetStarted = () => (
  <Box p={3}>
    <Flex wrap align='center'>
      <Field p={3} color='navy' />
      <Box fill>
        <Field color='pink' px={2} py={4}>
          <Link href='http://github.com/jxnblk/reflexbox'>
            <Heading level={2} color='white' children='GitHub' />
          </Link>
        </Field>
      </Box>
      <Field p={2} color='aqua'>
        <Heading color='white' children='Get Started' />
      </Field>
    </Flex>
    <Box py={4}>
      <Link href='http://jxnblk.com' color='black' children='Made by Jxnblk' />
    </Box>
  </Box>
)

export default GetStarted
