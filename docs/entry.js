
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import docgen from 'react-docgen'

import 'basscss/css/basscss.css'
import './app.css'

import { Flex, Box } from '../src'

const props = {
  Flex: Flex,
  // Box: docgen.parse(Box)
}

ReactDOM.render(<App {...props} />, document.getElementById('app'))

