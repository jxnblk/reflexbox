import React from 'react'
import { createProvider } from 'funcup'
import Nav from './Nav'
import Banner from './Banner'
import examples from './examples'
import colors from './colors'

const App = props => {
  const example = examples[Math.abs(props.index) % examples.length]
  const color = colors[Math.abs(props.index) % colors.length]

  return (
    <div>
      <Nav />
      <Banner
        example={example}
        color={color}
      />
    </div>
  )
}

const initialState = {
  index: 0,
  xray: false,
}

export default createProvider(initialState)(App)
