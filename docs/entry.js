
import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-addons-test-utils'
import * as docgen from 'react-docgen'

import App from './App'
import 'basscss/css/basscss.css'
import './app.css'

import { Flex, Box } from '../src'
import rawFlex from '!!raw!../src/Flex'
import rawBox from '!!raw!../src/Box'

var renderer = TestUtils.createRenderer()

function getRenderOutput(comp) {
  renderer.render(React.createElement(comp))
  return renderer.getRenderOutput()
}

const props = {
  components: {
    Flex: {
      name: 'Flex',
      output: getRenderOutput(Flex),
      data: docgen.parse(rawFlex)
    },
    Box: {
      name: 'Box',
      output: getRenderOutput(Box),
      data: docgen.parse(rawBox)
    }
  }
}

ReactDOM.render(<App {...props} />, document.getElementById('app'))

