import React from 'react'
import XRay from 'react-x-ray'
import { Flex, Box } from '../src'

module.exports = () => (
  <XRay>
    <Style css={css} />
    <h1>Hello</h1>
    <Flex my={3}>
      <Box p={2} w={1/2}>Box</Box>
      <Box p={2} w={1/2}>Box</Box>
    </Flex>
    <Flex wrap>
      <Box p={2} w={[ 1, 1/2, 1/3, 1/4 ]}>Box</Box>
      <Box p={2} w={[ 1, 1/2, 1/3, 1/4 ]}>Box</Box>
      <Box p={2} w={[ 1, 1/2, 1/3, 1/4 ]}>Box</Box>
      <Box p={2} w={[ 1, 1/2, 1/3, 1/4 ]}>Box</Box>
    </Flex>
    <Flex align={[ 'flex-start', 'center', 'flex-end' ]}>
      <Box p={2} w={1/2}>
        <h1>Box</h1>
      </Box>
      <Box p={2} w={1/2}>
        <p>Box</p>
      </Box>
    </Flex>
  </XRay>
)

const Style = props => <style
  dangerouslySetInnerHTML={{ __html: props.css }}
/>

const css = `*{box-sizing:border-box}
body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  line-height: 1.5;
  margin: 0;
}`
