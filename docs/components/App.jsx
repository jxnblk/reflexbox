
import React from 'react'
import { debounce, throttle } from 'lodash'
import { Footer } from 'blk'
import { Flex, Box, breakpoints } from '../../src'
import Header from './Header'
import Badges from './Badges'
import Intro from './Intro'
import FlexDemos from './FlexDemos'
import BoxDemos from './BoxDemos'

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

    return (
      <Box p={3}>
        <button onClick={this.update} children='Update' />
        <pre>breakpoint: {breakpoint} - {breakpoints[breakpoint]}</pre>
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
