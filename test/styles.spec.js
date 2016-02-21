
import { expect } from 'chai'
import { styles, Flex, Box } from '../src'
import React from 'react'
import sd from 'skin-deep'
import TestUtils from 'react-addons-test-utils'

describe('styles', () => {

  it('should be a function', () => {
    expect(styles).to.be.a('object')
  })

  it('should have an array as a scale', () => {
    expect(styles.scale).to.be.an('array')
  })

  context('when setting a custom scale', () => {
    let style
    const custom = [0, 6, 12, 24, 48]

    describe('Flex', () => {
      beforeEach(() => {
        styles.setScale(custom)
        const tree = sd.shallowRender(<Flex gutter={1} />)
        const dom = tree.getRenderOutput()
        style = dom.props.style
      })

      afterEach(() => {
        styles.reset()
      })

      it('should set a custom scale', () => {
        expect(styles.scale).to.deep.equal(custom)
      })

      it('should set margin on Flex based on the scale', () => {
        expect(style.marginLeft).to.equal(-6)
        expect(style.marginRight).to.equal(-6)
      })
    })

    describe('Box', () => {
      beforeEach(() => {
        styles.setScale(custom)
        const tree = sd.shallowRender(<Box p={1} />)
        const dom = tree.getRenderOutput()
        style = dom.props.style
      })

      afterEach(() => {
        styles.reset()
      })

      it('should set a custom scale', () => {
        expect(styles.scale).to.deep.equal(custom)
      })

      it('should set padding on Box based on the scale', () => {
        expect(style.padding).to.equal(6)
      })
    })
  })

  context('when setting custom breakpoints', () => {
    it('should add a single breakpoint')
    it('should override a single breakpoint')
    it('should clear a single breakpoint')
  })

})

