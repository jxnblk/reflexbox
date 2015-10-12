
import React from 'react'
import { Flex, Box } from '../src'
import Travis from './Travis'
import CodeClimate from './CodeClimate'
import Npm from './Npm'

const Badges = () => (
  <Flex align='center' gutter={2}>
    <Box p={2}>
      <Travis />
    </Box>
    <Box p={2}>
      <CodeClimate />
    </Box>
    <Box p={2}>
      <Npm />
    </Box>
  </Flex>
)

export default Badges
