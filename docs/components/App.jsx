
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
import Wrap from './Wrap'
import Stack from './Stack'
import GetStarted from './GetStarted'

const win = typeof window === 'undefined' ? false : window

class App extends React.Component {

  constructor () {
    super()
    this.update = debounce(this.update.bind(this), 200)
    this.setBreakpoint = this.setBreakpoint.bind(this)
    this.checkBreakpoint = this.checkBreakpoint.bind(this)
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
    const { breakpoint } = this.state

    const { matchMedia } = window
    function match (breakpoint) {
      return matchMedia(breakpoint).matches
    }

    if (match(breakpoints.lg)) {
      this.checkBreakpoint('lg')
    } else if (match(breakpoints.md)) {
      this.checkBreakpoint('md')
    } else if (match(breakpoints.sm)) {
      this.checkBreakpoint('sm')
    } else {
      this.checkBreakpoint('xs')
    }
  }

  checkBreakpoint (breakpoint) {
    if (breakpoint !== this.state.breakpoint) {
      this.setState({ breakpoint })
      this.forceUpdate()
    }
  }

  handleResize () {
  }

  update () {
    this.setBreakpoint()
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
        <Intro />
        <FlexBox />
        <MicroMacro />
        <Pad />
        <Fill />
        <Divide />
        <Respond />
        <Align />
        <Justify />
        <Wrap />
        <Stack />
        <GetStarted />
      </div>
    )
  }

}

App.propTypes = {
  components: React.PropTypes.object
}

export default App
