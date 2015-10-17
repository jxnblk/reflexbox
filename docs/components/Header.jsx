
import React from 'react'
import { Flex, Box } from '../../src'
import Link from './Link'

const Header = ({ title, description, links, ...props }) => (
  <Box py={2}>
    <Link href='http://jxnblk.com' children='Jxnblk' />
    <Flex md align='center'>
      <Box md={6}>
        <h1 className='caps' children={title} />
        <p className='caps' children={description} />
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

