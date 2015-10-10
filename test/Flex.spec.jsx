
import { assign } from 'lodash'
import React from 'react'
import { expect } from 'chai'
import sd from 'skin-deep'
import TestUtils from 'react-addons-test-utils'
import { Flex } from '../src'

describe('Flex', () => {

  let dom, instance, style, computed

  const initial = {
    display: 'flex',
    flexWrap: null,
    flexDirection: null,
    alignItems: null,
    justifyContent: null,
  }

  beforeEach(() => {
    const tree = sd.shallowRender(<Flex />)
    instance = tree.getMountedInstance()
    dom = tree.getRenderOutput()
    style = dom.props.style
  })

  it('should render', () => {
    expect(instance).to.exist
  })

  it('should have no styles by default', () => {
    expect(style).to.deep.equal(initial)
  })

  context('when wrap prop is true', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex wrap />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set flex-wrap wrap', () => {
      computed = assign({}, initial, { flexWrap: 'wrap' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when column prop is true', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex column />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set flex-direction column', () => {
      computed = assign({}, initial, { flexDirection: 'column' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to stretch', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='stretch' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items stretch', () => {
      computed = assign({}, initial, { alignItems: 'stretch' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to center', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='center' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items center', () => {
      computed = assign({}, initial, { alignItems: 'center' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to baseline', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='baseline' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'baseline' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to flex-start', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='flex-start' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'flex-start' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when align prop is set to flex-end', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex align='flex-end' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set align-items baseline', () => {
      computed = assign({}, initial, { alignItems: 'flex-end' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to center', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='center' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content center', () => {
      computed = assign({}, initial, { justifyContent: 'center' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to space-around', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='space-around' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content space-around', () => {
      computed = assign({}, initial, { justifyContent: 'space-around' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to space-between', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='space-between' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content space-between', () => {
      computed = assign({}, initial, { justifyContent: 'space-between' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to flex-start', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='flex-start' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content flex-start', () => {
      computed = assign({}, initial, { justifyContent: 'flex-start' })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when justify prop is set to flex-end', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Flex justify='flex-end' />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set justify-content flex-end', () => {
      computed = assign({}, initial, { justifyContent: 'flex-end' })
      expect(style).to.deep.equal(computed)
    })
  })


})
