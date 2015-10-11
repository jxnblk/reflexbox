
import React from 'react'
import { Header, Footer } from 'blk'
import { Flex, Box } from '../src'

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
          ]} />
        <Box py={4}>
          <h2 className='m0'>Demos</h2>
          <p>All Flex and Box components on this page are outlined for demonstration purposes.</p>
        </Box>
        <Box py={3}>
          <h3>Padded Box</h3>
          <p>The Box component adds padding with the p, px, py, pt, pr, pb, and pl props.</p>
          <Flex sm align='center' justify='space-between'>
            <Box p={1}>Box p=1</Box>
            <Box px={1}>Box px=1</Box>
            <Box py={1}>Box py=1</Box>
            <Box pt={1}>Box pt=1</Box>
            <Box pb={1}>Box pb=1</Box>
            <Box pl={1}>Box pl=1</Box>
            <Box pr={1}>Box pr=1</Box>
          </Flex>
          <Flex sm align='center' justify='space-between'>
            <Box p={2}>Box p=2</Box>
            <Box px={2}>Box px=2</Box>
            <Box py={2}>Box py=2</Box>
            <Box pt={2}>Box pt=2</Box>
            <Box pb={2}>Box pb=2</Box>
            <Box pl={2}>Box pl=2</Box>
            <Box pr={2}>Box pr=2</Box>
          </Flex>
          <Flex sm align='center' justify='space-between'>
            <Box p={3}>Box p=3</Box>
            <Box px={3}>Box px=3</Box>
            <Box py={3}>Box py=3</Box>
            <Box pt={3}>Box pt=3</Box>
            <Box pb={3}>Box pb=3</Box>
            <Box pl={3}>Box pl=3</Box>
            <Box pr={3}>Box pr=3</Box>
          </Flex>
          <Flex sm align='center' justify='space-between'>
            <Box p={4}>Box p=4</Box>
            <Box px={4}>Box px=4</Box>
            <Box py={4}>Box py=4</Box>
            <Box pt={4}>Box pt=4</Box>
            <Box pb={4}>Box pb=4</Box>
            <Box pl={4}>Box pl=4</Box>
            <Box pr={4}>Box pr=4</Box>
          </Flex>
        </Box>
        <Box py={3}>
          <h3>Filled Box</h3>
          <p>Use the fill prop to make a box expand to fill its parent Flex component</p>
          <Flex sm align='center' justify='space-between'>
            <Box p={2} fill>Box p=2 fill</Box>
            <Box p={2}>Box p=2</Box>
          </Flex>
        </Box>
        <Box py={3}>
          <h3>Flex component</h3>
          <p>The Flex component creates a flexbox context for all children.</p>
          <Flex>
            <h1 className='m2'>Flex h1</h1>
            <Box p={2}>Box</Box>
          </Flex>
        </Box>
        <Box py={3}>
          <h3>Flex align</h3>
          <p>The align prop sets the align-items property</p>
          <Flex align='center'>
            <h1 className='m2'>Flex align='center'</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <Flex align='baseline'>
            <h1 className='m2'>Flex align='baseline'</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <Flex align='flex-start'>
            <h1 className='m2'>Flex align='flex-start'</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <Flex align='flex-end'>
            <h1 className='m2'>Flex align='flex-end'</h1>
            <Box px={2}>Box</Box>
          </Flex>
        </Box>
        <Box py={3}>
          <h3>Flex justify</h3>
          <p>The justify prop sets the justify-content property</p>
          <Flex justify='center'>
            <h1 className='m2'>Flex justify='center'</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <Flex justify='space-around'>
            <h1 className='m2'>Flex justify='space-around'</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <Flex justify='space-between'>
            <h1 className='m2'>Flex justify='space-between'</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <Flex justify='flex-start'>
            <h1 className='m2'>Flex justify='flex-start'</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <Flex justify='flex-end'>
            <h1 className='m2'>Flex justify='flex-end'</h1>
            <Box px={2}>Box</Box>
          </Flex>
        </Box>
        <Box py={3}>
          <h3>Flex column</h3>
          <p>The column prop sets flex-direction column</p>
          <Flex column>
            <h1 className='m2'>Flex column</h1>
            <Box px={2}>Box</Box>
          </Flex>
        </Box>
        <Box py={3}>
          <h3>Flex wrap</h3>
          <p>The wrap prop sets flex-wrap wrap</p>
          <Flex wrap>
            <h1 className='m2'>Flex wrap</h1>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
            <Box px={4}>Box</Box>
          </Flex>
        </Box>
        <Box py={3}>
          <h3>Flex sm, md, lg</h3>
          <p>The sm prop only sets display flex above the small breakpoint</p>
          <Flex sm>
            <h1 className='m2'>Flex sm</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <p className='mt2'>The md prop only sets display flex above the medium breakpoint</p>
          <Flex md>
            <h1 className='m2'>Flex md</h1>
            <Box px={2}>Box</Box>
          </Flex>
          <p className='mt2'>The lg prop only sets display flex above the large breakpoint</p>
          <Flex lg>
            <h1 className='m2'>Flex lg</h1>
            <Box px={2}>Box</Box>
          </Flex>
        </Box>
        <Box py={4}>
          <pre>{JSON.stringify(this.props.components.Flex.data, null, 2)}</pre>
          <pre>{JSON.stringify(this.props.components.Box.data, null, 2)}</pre>
        </Box>
        <Footer
          title='reflexbox'
          href='http://jxnblk.com/reflexbox'
          links={[
            {
              href: 'https://npmjs.com/package/reflexbox',
              text: 'npm'
            },
            {
              href: 'https://github.com/jxnblk/reflexbox',
              text: 'GitHub'
            },
          ]} />
      </Box>
    )
  }

}

App.propTypes = {
  derp: React.PropTypes.string
}

export default App
