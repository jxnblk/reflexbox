
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
        {'Reflexbox is a responsive flexbox grid system composed of the Reflex higher order component and <Flex /> and <Box /> helper components.'}
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

