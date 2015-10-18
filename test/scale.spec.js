
import { expect } from 'chai'
import { scale, Box } from '../src'
import React from 'react'
import sd from 'skin-deep'
import TestUtils from 'react-addons-test-utils'

describe('scale', () => {
  it('should be an object', () => {
    expect(scale).to.be.an('object')
  })

  it('should have a length of 5', () => {
    expect(scale).to.have.length(5)
  })

  context('when setting a custom scale', () => {
    let style
    const custom = [0, 6, 12, 24, 48]

    beforeEach(() => {
      scale.set(custom)
      const tree = sd.shallowRender(<Box p={1} />)
      const dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set a custom scale', () => {
      expect(scale).to.deep.equal(custom)
    })

    it('should set padding on Box based on the scale', () => {
      expect(style.padding).to.equal(6)
    })
  })

})

