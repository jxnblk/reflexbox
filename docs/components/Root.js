
import React from 'react'
import { Flex, Box } from '../../src'
import ComponentDocs from './ComponentDocs'

class Root extends React.Component {

  constructor () {
    super()
    this.state = {
    }
  }

  render () {
    const { components: { flex, box } } = this.props

    return (
      <div className='dark-blue bg-blue'>
        <header className='v100'>
          <Flex column
            justify='center'
            className='v100 p4'>
            <h1 className='h0 m0 white'>
              <Flex align='baseline'>
                <Box p={2}
                  className='caps blue bg-white border b3 border-white'>Reflex</Box>
                <Box p={2}
                  className='caps border b3'>
                  box
                </Box>
              </Flex>
            </h1>
            <p className='h2 bold py4 m0 max-width-4'>
              React flexbox layout and grid system, built with stateless function components and inline styles.
              Reflexbox is a React grid system composed of the Flex and Box components.
              The Flex component creates a flexbox context and controls direction, alignment, justification, and gutter compensation.
              The Box component controls padding, flex-basis, and width.
              With breakpoint-based responsive styles, these two components can handle virtually any layout composition.
            </p>
          </Flex>
        </header>
        <ComponentDocs {...flex} />
        <ComponentDocs {...box} />
        <footer className='p4 '>
          <Flex align='flex-end'>
            <Box auto p={3}>
              <p className='h2 caps bold'>Get Started</p>
              <a href='//github.com/jxnblk/reflexbox'
                className='bold text-decoration-none inline-block p2 rounded dark-blue bg-white'>
                View on GitHub
              </a>
            </Box>
            <Box p={3}>
              <a href='//jxnblk.com' className='h5 white'>Made by Jxnblk</a>
            </Box>
          </Flex>
        </footer>
      </div>
    )
  }
}

export default Root

