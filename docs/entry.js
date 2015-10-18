
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Root from './components/Root'
import './app.css'

import { Flex, Box, styles } from '../src'

// import TestUtils from 'react-addons-test-utils'
// var renderer = TestUtils.createRenderer()
// function getRenderOutput (comp) {
//   renderer.render(React.createElement(comp))
//   return renderer.getRenderOutput()
// }

const props = {
  title: 'reflexbox',
  href: 'http://jxnblk.com/reflexbox',
  description: 'React flexbox layout and grid system, built with stateless components and inline styles',
  links: [
    {
      href: 'https://npmjs.com/package/reflexbox',
      children: 'npm'
    },
    {
      href: 'https://github.com/jxnblk/reflexbox',
      children: 'GitHub'
    }
  ],
  components: {
    flex: {
      name: 'Flex',
      // output: getRenderOutput(Flex),
    },
    box: {
      name: 'Box',
      // component: Box
      // output: getRenderOutput(Box),
    }
  }
}

// const propTypes = props.components.box.component.propTypes
// Object.keys(propTypes).forEach((key) => {
//   console.log(key)
//   console.log(propTypes[key])
//   console.log(React.PropTypes)
// })

ReactDOM.render(<Root {...props} />, document.getElementById('app'))

