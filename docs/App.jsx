
import React from 'react'
import { Header, Footer } from 'blk'
import { Flex, Box } from '..'

class App extends React.Component {

  render() {
    return (
      <Box p={3}>
        <Header
          title='reflexbox'
          href='http://jxnblk.com/reflexbox'
          description='React flexbox layout and grid system'
          links={[
            {
              href: 'https://npmjs.com/package/reflexbox',
              text: 'npm'
            },
            {
              href: 'https://github.com/jxnblk/reflexbox',
              text: 'GitHub'
            },
          ]}
          />
        <Box py={4}>
          <Flex center>
            <h2>Demos</h2>
            <Box>Box</Box>
          </Flex>
        </Box>
      </Box>
    )
  }

}

export default App
