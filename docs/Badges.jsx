
import React from 'react'
import { GithubButton, TweetButton } from 'blk'
import { Flex, Box } from '../src'
import Travis from './Travis'
import CodeClimate from './CodeClimate'
import Npm from './Npm'

const Badges = () => (
  <Flex
    align='center'
    justify='space-between'
    wrap
    gutter={2}>
    <Box p={2}>
      <Travis />
    </Box>
    <Box p={2}>
      <CodeClimate />
    </Box>
    <Box p={2}>
      <Npm />
    </Box>
    <Box p={2}>
      <GithubButton
        user='jxnblk'
        repo='reflexbox' />
    </Box>
    <Box p={2}>
      <TweetButton
        text='Reflexbox: React grid and layout system built with stateless components'
        url='http://jxnblk.com/reflexbox'
      />
    </Box>
  </Flex>
)

export default Badges
