
import React from 'react'
import { debounce, throttle } from 'lodash'
import { Footer } from 'blk'
import { Flex, Box, breakpoints } from '../../src'
import Header from './Header'
import Heading from './Heading'
import Text from './Text'
import Badges from './Badges'

// Sections
import Intro from './Intro'
import FlexBox from './FlexBox'
import MicroMacro from './MicroMacro'
import Pad from './Pad'
import Fill from './Fill'
import Divide from './Divide'
import Respond from './Respond'
import Align from './Align'
import Justify from './Justify'

import Stack from './Stack'

const win = typeof window === 'undefined' ? false : window

class App extends React.Component {

  constructor () {
    super()
    this.update = debounce(this.update.bind(this), 200)
    this.setBreakpoint = this.setBreakpoint.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.state = {
      breakpoint: null
    }
  }


  componentDidMount () {
    this.setBreakpoint()
    win.addEventListener('resize', this.update)
  }

  componentWillUnmount () {
    win.removeEventListener('resize', this.update)
  }

  setBreakpoint () {
    if (!win) {
      return false
    }

    const { matchMedia } = window
    function match (breakpoint) {
      return matchMedia(breakpoint).matches
    }

    if (match(breakpoints.lg)) {
      this.setState({ breakpoint: 'lg' })
    } else if (match(breakpoints.md)) {
      this.setState({ breakpoint: 'md' })
    } else if (match(breakpoints.sm)) {
      this.setState({ breakpoint: 'sm' })
    } else {
      this.setState({ breakpoint: 'xs' })
    }
  }

  handleResize () {
  }

  update () {
    this.setBreakpoint()
    this.forceUpdate()
  }

  render () {
    const { components } = this.props
    const { breakpoint } = this.state

    const sx = {
      root: {
        overflowX: 'hidden'
      }
    }

    return (
      <div style={sx.root}>
        <Header {...this.props} {...this.state} />
        <Badges />
        {/* <Intro /> */}
        <FlexBox />
        <MicroMacro />
        <Pad />
        <Fill />
        <Divide />
        <Respond />
        <Align />
        <Justify />
        <Stack />

        {/*

          <Heading children='Wrap' />

          <Heading children='Get Started' />
          <Footer {...this.props} />
        */}
      </div>
    )
  }

}

App.propTypes = {
  components: React.PropTypes.object
}

export default App
