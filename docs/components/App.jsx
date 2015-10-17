
import React from 'react'
import { Footer } from 'blk'
import { Flex, Box } from '../../src'
import Header from './Header'
import Badges from './Badges'
import Intro from './Intro'
import FlexDemos from './FlexDemos'
import BoxDemos from './BoxDemos'

class App extends React.Component {

  render () {
    const { components } = this.props

    return (
      <Box p={3}>
        <Header {...this.props} />
        <Badges />
        <Intro />
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
