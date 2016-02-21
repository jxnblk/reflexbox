
import React from 'react'

class Root extends React.Component {
  render () {
    console.log('Root props', this.props)

    return (
      <div>
        <h1>Reflexbox</h1>
        <hr />
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    )
  }
}

export default Root

