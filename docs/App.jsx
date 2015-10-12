
import React from 'react'
import { Header, Footer } from 'blk'
import { Flex, Box } from '../src'
import FlexDemos from './FlexDemos'
import BoxDemos from './BoxDemos'

class App extends React.Component {

  render() {
    const { components } = this.props

    return (
      <Box p={3}>
        <Header {...this.props} />
        <BoxDemos data={components.box.data} />
        <FlexDemos data={components.flex.data} />
        <Footer {...this.props} />
      </Box>
    )
  }

}

App.propTypes = {
  derp: React.PropTypes.string
}

export default App
