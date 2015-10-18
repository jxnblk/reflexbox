
import React from 'react'
import { Flex, Box, breakpoints } from '../../src'
import Heading from './Heading'
import Text from './Text'
import Link from './Link'
import Rect from './Rect'
import Field from './Field'

const Header = ({ title, description, links, breakpoint, ...props }) => (
  <Box px={3} pt={4}>
    <Field p={2} color='pink'>
      <Flex md align='center'>
        <Field lg={8} px={3} py={4} color='aqua'>
          <Flex align='center'>
            <Box pb={4}>
              <Link href='http://jxnblk.com' color='white' children='Jxnblk' />
              <Heading level={1} color='navy' children={title} />
              <Text caps color='white' children={description} />
            </Box>
            <Field p={3} color='navy' />
          </Flex>
        </Field>
        <Box fill />
        <Field p={3} color='pink'>
          {links.map((link, i) => (
            <Box key={i} px={1}>
              <Link {...link} color='black' />
            </Box>
          ))}
        </Field>
      </Flex>
    </Field>
  </Box>
)

export default Header

