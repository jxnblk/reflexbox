
import React from 'react'
import ReactDOM from 'react-dom'
// import TestUtils from 'react-addons-test-utils'
// import * as docgen from 'react-docgen'

import App from './components/App'
import Root from './components/Root'
// import 'basscss/css/basscss.css'
// import 'blk/src/css/blk.css'
import './app.css'

import { Flex, Box } from '../src'
// import rawFlex from '!!raw!../src/Flex'
// import rawBox from '!!raw!../src/Box'

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
      // data: docgen.parse(rawFlex)
    },
    box: {
      name: 'Box',
      // output: getRenderOutput(Box),
      // data: docgen.parse(rawBox)
    }
  }
}

ReactDOM.render(<Root {...props} />, document.getElementById('app'))

