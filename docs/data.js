
import { parse } from 'react-docgen'
import rcp from 'react-component-permutations'
import { Flex, Box, styles } from '../src'

import flexSrc from '!!babel!raw!../src/Flex'
import boxSrc from '!!babel!raw!../src/Box'

console.log('DATA')
console.log('rcp', rcp)
console.log('rcp(flexSrc)', rcp(flexSrc))
console.log('rcp(boxSrc)', rcp(boxSrc))

const flexPermutations = rcp(flexSrc)

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
      docs: parse(flexSrc),
      // permutations: rcp(flexSrc)
    },
    box: {
      name: 'Box',
      Component: Box,
      raw: boxSrc,
      docs: parse(boxSrc),
      // permutations: rcp(boxSrc)
    }
  }
}

module.exports = data

