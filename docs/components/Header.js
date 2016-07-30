
import React from 'react'
import { Flex, Box } from '../../src'
import CarbonAd from './CarbonAd'
import TweetButton from './TweetButton'
import GithubButton from './GithubButton'
import TravisBadge from './TravisBadge'

const Header = ({ description, ...props }) => (
  <header className='v100'>
    <Flex column
      justify='center'
      className='v100 p3'>
      <h1 className='m0'>
        <Flex align='baseline'>
          <Box p={2}
            className='caps white bg-blue border b3 border-blue'>Reflex</Box>
          <Box p={2}
            className='caps border b3'>
            box
          </Box>
        </Flex>
      </h1>
      <p className='h3 bold py4 m0 max-width-4'>
        React flexbox layout and grid system, built with stateless function components and inline styles.
        Reflexbox is a React grid system composed of the Flex and Box components.
        The Flex component creates a flexbox context and controls direction, alignment, justification, and gutter compensation.
        The Box component controls padding, flex-basis, and width.
        With breakpoint-based responsive styles, these two components can handle virtually any layout composition.
      </p>
      <Box py={3}>
        <Flex align='center'>
          <TravisBadge />
          <TweetButton text={description} />
          <GithubButton />
        </Flex>
      </Box>
      <CarbonAd />
    </Flex>
  </header>
)

export default Header

