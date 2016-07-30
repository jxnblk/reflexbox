
import React from 'react'
import Header from './Header'
import Examples from './Examples'
import Footer from './Footer'

class Root extends React.Component {
  render () {
    const { examples } = this.props

    return (
      <div className='blue'>
        <Header {...this.props} />
        <Examples examples={examples} />
        <Footer />
      </div>
    )
  }
}

export default Root

