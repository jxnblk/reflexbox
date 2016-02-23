
import { parse } from 'react-docgen'
import { Flex, Box, styles } from '../src'

import flexSrc from '!!babel!raw!../src/Flex'
import boxSrc from '!!babel!raw!../src/Box'

const data = {
  title: 'reflexbox',
  href: 'http://jxnblk.com/reflexbox',
  description: 'React flexbox layout and grid system, built with stateless components and inline styles',
  links: [
    {
      href: 'https://npmjs.com/package/reflexbox',
      children: 'npm'
    },
    {
      href: 'https://github.com/jxnblk/reflexbox',
      children: 'GitHub'
    }
  ],
  components: {
    flex: {
      name: 'Flex',
      Component: Flex,
      raw: flexSrc,
      docs: parse(flexSrc)
    },
    box: {
      name: 'Box',
      Component: Box,
      raw: boxSrc,
      docs: parse(boxSrc)
    }
  }
}

module.exports = data

