
import React from 'react'
import App from './App'

class Root extends React.Component {
  render () {
    return <App {...this.props} />
  }
}

export default Root
