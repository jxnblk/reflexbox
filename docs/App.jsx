
import React from 'react'
import { Header, Footer } from 'blk'
import { Flex, Box } from '../src'
import Badges from './Badges'
import FlexDemos from './FlexDemos'
import BoxDemos from './BoxDemos'

class App extends React.Component {

  render () {
    const { components } = this.props

    return (
      <Box p={3}>
        <Header {...this.props} />
        <Badges />
        <Box py={3}>
          <Flex sm gutter={2}>
            <Box px={2} sm={6}>
              <p>
                {`
                Reflexbox is a React grid system composed of the
                <Flex /> and <Box /> components.
                The Flex component creates a flexbox context and
                controls direction, alignment, justification, and gutter compensation.
                The Box component controls padding, flex-basis, and width.
                With breakpoint-based responsive styles,
                these two components can handle virtually all layout styling needs.
                `}
              </p>
            </Box>
            <Box px={2} sm={6}>
              <p>
                {`
                  These components are tested with React’s shallow rendering
                  as well as browser tests in Karma at four different breakpoints.
                `}
              </p>
            </Box>
          </Flex>
        </Box>
        <BoxDemos data={components.box.data} />
        <FlexDemos data={components.flex.data} />
        <Footer {...this.props} />
      </Box>
    )
  }

}

App.propTypes = {
  components: React.PropTypes.object
}

export default App
