
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

  it('should have an object for breakpoints', () => {
    expect(styles.breakpoints).to.be.an('object')
  })

  describe('methods', () => {
    it('should set custom values', () => {
      styles.set({ scale: [0, 1, 2] })
      expect(styles.scale).to.deep.equal([0, 1, 2])
    })

    it('should setScale', () => {
      styles.setScale([0, 3, 6])
      expect(styles.scale).to.deep.equal([0, 3, 6])
    })

    it('should setBreakpoints', () => {
      styles.setBreakpoints({ medium: '(min-width: 40em)' })
      expect(styles.breakpoints).to.deep.equal({ medium: '(min-width: 40em)' })
    })

    it('should get saved values', () => {
      expect(styles.get('scale')).to.deep.equal([0, 3, 6])
      expect(styles.get('breakpoints')).to.deep.equal({ medium: '(min-width: 40em)' })
    })

    it('should reset defaults', () => {
      styles.reset()
      expect(styles.scale).to.deep.equal([0, 8, 16, 32, 64])
      expect(styles.breakpoints).to.deep.equal({
        sm: '(min-width: 32em)',
        md: '(min-width: 48em)',
        lg: '(min-width: 64em)'
      })
    })

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
    beforeEach(() => {
      styles.setBreakpoints({ medium: '(min-width: 40em)' })
    })

    afterEach(() => {
      styles.reset()
    })

    it('should add a single breakpoint', () => {
      expect(styles.breakpoints.medium)
      expect(styles.breakpoints.medium).to.equal('(min-width: 40em)')
    })

  })

})

