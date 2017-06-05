import React from 'react'
import { createProvider } from 'funcup'
import Nav from './Nav'
import Banner from './Banner'
import examples from './examples'

const App = props => {
  const example = examples[Math.abs(props.index) % examples.length]

  return (
    <div>
      <Nav />
      <Banner example={example} />
    </div>
  )
}

const initialState = {
  index: 0,
  color: '#07c',
  xray: false,
}

export default createProvider(initialState)(App)
