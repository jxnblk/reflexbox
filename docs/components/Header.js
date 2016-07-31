
import React from 'react'
import { Reflex, Flex, Box } from '../../src'
import CarbonAd from './CarbonAd'
import TweetButton from './TweetButton'
import GithubButton from './GithubButton'

const H1 = Reflex('h1')

const Header = ({ description, ...props }) => {
  return (
    <header>
      <Flex wrap align='center' px={3} py={6}>
        <H1 auto mr={2}>
          <Flex align='baseline'>
            <Box p={2} className='caps white bg-blue b3 border-blue'>Reflex</Box>
            <Box p={2} className='caps b3'>
              Box
            </Box>
          </Flex>
        </H1>
        <Box auto py={3}>
          <Flex align='center'>
            <TweetButton mr={2} text={description} />
            <GithubButton />
          </Flex>
        </Box>
        <CarbonAd />
      </Flex>
    </header>
  )
}

export default Header

