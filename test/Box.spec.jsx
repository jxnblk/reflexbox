
import { assign } from 'lodash'
import React from 'react'
import { expect } from 'chai'
import sd from 'skin-deep'
import TestUtils from 'react-addons-test-utils'
import { Box } from '../src'

describe('Box', () => {

  let dom, instance, style, computed

  const initial = {
    flex: null,
    padding: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null
  }

  beforeEach(() => {
    const tree = sd.shallowRender(<Box />)
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

  context('when p prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box p={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding', () => {
      computed = assign({}, style, { padding: 8 })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when px prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box px={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding left and right', () => {
      computed = assign({}, style, {
        paddingLeft: 8,
        paddingRight: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when py prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box py={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding top and bottom', () => {
      computed = assign({}, style, {
        paddingTop: 8,
        paddingBottom: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when pt prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box pt={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding top', () => {
      computed = assign({}, style, {
        paddingTop: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when pr prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box pr={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding right', () => {
      computed = assign({}, style, {
        paddingRight: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when pb prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box pb={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding bottom', () => {
      computed = assign({}, style, {
        paddingBottom: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when pl prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box px={1} />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should have padding left', () => {
      computed = assign({}, style, {
        paddingLeft: 8
      })
      expect(style).to.deep.equal(computed)
    })
  })

  context('when fill prop is set', () => {
    beforeEach(() => {
      const tree = sd.shallowRender(<Box fill />)
      dom = tree.getRenderOutput()
      style = dom.props.style
    })

    it('should set flex: 1 1 auto', () => {
      computed = assign({}, style, { flex: '1 1 auto' })
      expect(style).to.deep.equal(computed)
    })
  })


})
