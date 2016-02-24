
import React from 'react'
import { styles, Flex, Box } from '../../src'
import Header from './Header'
import ComponentDocs from './ComponentDocs'
import Examples from './Examples'
import Footer from './Footer'

class Root extends React.Component {
  render () {
    const { components: { flex, box }, examples } = this.props

    return (
      <div className='dark-blue bg-blue'>
        <Header {...this.props} />
        <ComponentDocs {...flex} />
        <ComponentDocs {...box} />
        <Examples examples={examples} />
        <Footer />
      </div>
    )
  }
}

export default Root

