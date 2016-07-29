
import React from 'react'
import Header from './Header'
import ComponentDocs from './ComponentDocs'
import Examples from './Examples'
import Footer from './Footer'

class Root extends React.Component {
  render () {
    const { components, examples } = this.props
    const { reflex, flex, box } = components
    console.log('reflex', reflex)

    return (
      <div className='dark-blue bg-blue'>
        <Header {...this.props} />
        <ComponentDocs {...reflex} />
        <ComponentDocs {...flex} />
        <ComponentDocs {...box} />
        <Examples examples={examples} />
        <Footer />
      </div>
    )
  }
}

export default Root

