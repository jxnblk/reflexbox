
import React from 'react'
import { Flex, Box, breakpoints } from '../../src'
import Heading from './Heading'
import Text from './Text'
import Link from './Link'

const Header = ({ title, description, links, breakpoint, ...props }) => (
  <Box py={2}>
    <Link href='http://jxnblk.com' children='Jxnblk' />
    <Flex md align='center'>
      <Box md={6}>
        <Heading level={1} color='navy' children={title} />
        <Text caps color='navy' children={description} />
        <Text small caps color='green'>
          {breakpoint} - {breakpoints[breakpoint]}
        </Text>
      </Box>
      <Box fill />
      <Flex gutter={1}>
        {links.map((link, i) => (
          <Box key={i} px={1}>
            <Link {...link} />
          </Box>
        ))}
      </Flex>
    </Flex>
  </Box>
)

export default Header

