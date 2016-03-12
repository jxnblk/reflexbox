
import { assign, round } from 'lodash'
import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import { Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Base', () => {
  let tree, style

  beforeEach(() => {
    renderer.render(<Base />)
    tree = renderer.getRenderOutput()
    style = tree.props.style
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have no styles by default', () => {
    expect(style).toEqual({})
  })

  context('when setting style prop', () => {
    beforeEach(() => {
      renderer.render(<Base style={{ backgroundColor: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should assign styles', () => {
      expect(style).toEqual({ backgroundColor: 'tomato' })
    })
  })

  context('when setting style and _style props', () => {
    beforeEach(() => {
      renderer.render(
        <Base
          style={{ backgroundColor: 'tomato' }}
          _style={{ backgroundColor: 'green' }} />
      )
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should override style with _style', () => {
      expect(style).toEqual({ backgroundColor: 'green' })
    })
  })

  context('when setting _className and className prop', () => {
    beforeEach(() => {
      renderer.render(<Base _className='Box' className='Box--custom' />)
      tree = renderer.getRenderOutput()
    })

    it('should add classes', () => {
      expect(tree.props.className).toEqual('Box Box--custom')
    })
  })


  describe('React context', () => {
    context('when setting scale', () => {
      beforeEach(() => {
        renderer.render(<Base p={2} />, {
          reflexbox: {
            scale: [0, 2, 4, 6, 8]
          }
        })
        tree = renderer.getRenderOutput()
      })
      it('should pick up new scale values', () => {
        expect(tree.props.style.padding).toEqual(4)
      })
    })
  })

  describe('browser', () => {
    if (typeof window === 'undefined') {
      return false
    }

    class Root extends React.Component {
      static childContextTypes = {
        reflexbox: React.PropTypes.object
      }
      getChildContext () { return this.props.ctx || {} }
      render () {
        return <div {...this.props} />
      }
    }

    const render = (children, ctx) => {
      const root = TestUtils.renderIntoDocument(
        <Root ctx={ctx}>{children}</Root>
      )
      const base = TestUtils.findRenderedDOMComponentWithClass(root, 'Test')
      return { root, base }
    }

    describe('padding', () => {
      let tree, root, base

      context('when p prop is set', () => {
        beforeEach(() => {
          tree = render(<Base _className='Test' p={1} />)
        })

        it('should have padding', () => {
          console.log(tree.base.style.padding)
          expect(tree.base.style.padding).toEqual('8px')
        })
      })

      context('when px prop is set', () => {
        beforeEach(() => {
          tree = render(<Base _className='Test' px={1} />)
        })

        it('should not have padding', () => {
          expect(tree.base.style.padding).toEqual('')
        })

        it('should have padding left and right', () => {
          expect(tree.base.style.paddingLeft).toEqual('8px')
          expect(tree.base.style.paddingRight).toEqual('8px')
        })
      })

      context('when p and px prop are set', () => {
        beforeEach(() => {
          tree = render(<Base _className='Test' p={2} px={1} />)
        })

        it('should have padding', () => {
          expect(tree.base.style.padding).toEqual('16px 8px')
        })

        it('should have padding top and bottom', () => {
          expect(tree.base.style.paddingTop).toEqual('16px')
          expect(tree.base.style.paddingBottom).toEqual('16px')
        })

        it('should have padding left and right', () => {
          expect(tree.base.style.paddingLeft).toEqual('8px')
          expect(tree.base.style.paddingRight).toEqual('8px')
        })
      })

      /*
      context('when py prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base py={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have padding top and bottom', () => {
          expect(style).toEqual({
            paddingTop: 8,
            paddingBottom: 8
          })
        })
      })

      context('when pt prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base pt={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have padding top', () => {
          expect(style).toEqual({
            paddingTop: 8
          })
        })
      })

      context('when pr prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base pr={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have padding right', () => {
          expect(style).toEqual({
            paddingRight: 8
          })
        })
      })

      context('when pb prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base pb={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have padding bottom', () => {
          expect(style).toEqual({
            paddingBottom: 8
          })
        })
      })

      context('when pl prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base pl={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have padding left', () => {
          expect(style).toEqual({
            paddingLeft: 8
          })
        })
      })
      */
    })

    describe('margin', () => {
      context('when m prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base m={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have margin', () => {
          expect(style).toEqual({ margin: 8 })
        })
      })

      context('when mx prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base mx={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have margin left and right', () => {
          expect(style).toEqual({
            marginLeft: 8,
            marginRight: 8
          })
        })
      })

      context('when my prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base my={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have margin top and bottom', () => {
          expect(style).toEqual({
            marginTop: 8,
            marginBottom: 8
          })
        })
      })

      context('when mt prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base mt={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have margin top', () => {
          expect(style).toEqual({
            marginTop: 8
          })
        })
      })

      context('when mr prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base mr={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have margin right', () => {
          expect(style).toEqual({
            marginRight: 8
          })
        })
      })

      context('when mb prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base mb={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have margin bottom', () => {
          expect(style).toEqual({
            marginBottom: 8
          })
        })
      })

      context('when ml prop is set', () => {
        beforeEach(() => {
          renderer.render(<Base ml={1} />)
          tree = renderer.getRenderOutput()
          style = tree.props.style
        })

        it('should have margin left', () => {
          expect(style).toEqual({
            marginLeft: 8
          })
        })
      })
    })
  })
})

