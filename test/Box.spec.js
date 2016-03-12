
import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import assign from 'object-assign'
import { Box, Base } from '../src'

const renderer = TestUtils.createRenderer()

const round = (n) => Math.round(n * 100) / 100

describe('Box', () => {
  let tree, style

  beforeEach(() => {
    renderer.render(<Box />)
    tree = renderer.getRenderOutput()
    style = tree.props._style
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have no styles by default', () => {
    expect(style).toEqual({})
  })

  context('when setting style prop', () => {
    beforeEach(() => {
      renderer.render(<Box style={{ backgroundColor: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set styles', () => {
      expect(style).toEqual({ backgroundColor: 'tomato' })
    })
  })

  context('when setting className prop', () => {
    beforeEach(() => {
      renderer.render(<Box className='Box--custom' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a class', () => {
      expect(tree.props.className).toEqual('Box--custom')
    })
  })

  context('when no className is set', () => {
    beforeEach(() => {
      renderer.render(<Box />)
      tree = renderer.getRenderOutput()
    })

    it('should not add a class', () => {
      expect(tree.props.className).toNotExist()
    })
  })

  context('when flex prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box flex />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set display flex', () => {
      expect(style).toEqual({ display: 'flex' })
    })
  })

  context('when auto prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box auto />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set flex: 1 1 auto', () => {
      expect(style).toEqual({ flex: '1 1 auto' })
    })
  })

  context('when order prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box order={2} />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set order: 2', () => {
      expect(style).toEqual({ order: 2 })
    })
  })

  context('when align prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box align='center' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set align-self: center', () => {
      expect(style).toEqual({ alignSelf: 'center' })
    })
  })

  describe('col prop', () => {
    context('when set to 1', () => {
      beforeEach(() => {
        renderer.render(<Box col={1} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 8.3%', () => {
        const computed = assign({}, style, {
          width: (1 / 12 * 100) + '%',
          flexBasis: (1 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 2', () => {
      beforeEach(() => {
        renderer.render(<Box col={2} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 16.6%', () => {
        const computed = assign({}, style, {
          width: (2 / 12 * 100) + '%',
          flexBasis: (2 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 3', () => {
      beforeEach(() => {
        renderer.render(<Box col={3} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 25%', () => {
        const computed = assign({}, style, {
          width: (3 / 12 * 100) + '%',
          flexBasis: (3 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 4', () => {
      beforeEach(() => {
        renderer.render(<Box col={4} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 33.3%', () => {
        const computed = assign({}, style, {
          width: (4 / 12 * 100) + '%',
          flexBasis: (4 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 5', () => {
      beforeEach(() => {
        renderer.render(<Box col={5} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 41.6%', () => {
        const computed = assign({}, style, {
          width: (5 / 12 * 100) + '%',
          flexBasis: (5 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 6', () => {
      beforeEach(() => {
        renderer.render(<Box col={6} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 50%', () => {
        const computed = assign({}, style, {
          width: (6 / 12 * 100) + '%',
          flexBasis: (6 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 7', () => {
      beforeEach(() => {
        renderer.render(<Box col={7} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 58.3%', () => {
        const computed = assign({}, style, {
          width: (7 / 12 * 100) + '%',
          flexBasis: (7 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 8', () => {
      beforeEach(() => {
        renderer.render(<Box col={8} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 66.6%', () => {
        const computed = assign({}, style, {
          width: (8 / 12 * 100) + '%',
          flexBasis: (8 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 9', () => {
      beforeEach(() => {
        renderer.render(<Box col={9} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 75%', () => {
        const computed = assign({}, style, {
          width: (9 / 12 * 100) + '%',
          flexBasis: (9 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 10', () => {
      beforeEach(() => {
        renderer.render(<Box col={10} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 83.3%', () => {
        const computed = assign({}, style, {
          width: (10 / 12 * 100) + '%',
          flexBasis: (10 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 11', () => {
      beforeEach(() => {
        renderer.render(<Box col={11} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 91.6%', () => {
        const computed = assign({}, style, {
          width: (11 / 12 * 100) + '%',
          flexBasis: (11 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })

    context('when set to 12', () => {
      beforeEach(() => {
        renderer.render(<Box col={12} />)
        style = renderer.getRenderOutput().props._style
      })
      it('should set width and flex-basis to 100%', () => {
        const computed = assign({}, style, {
          width: (12 / 12 * 100) + '%',
          flexBasis: (12 / 12 * 100) + '%'
        })
        expect(style).toEqual(computed)
      })
    })
  })

  describe('media queries', () => {
    let root, computed, width, flexBasis

    if (typeof window === 'undefined') {
      return false
    }

    class Root extends React.Component {
      render () { return <div {...this.props} /> }
    }

    function setProps (props) {
      root = TestUtils.renderIntoDocument(
        <Root><Box {...props} /></Root>
      )
      computed = TestUtils.findRenderedDOMComponentWithClass(root, 'Box').style
    }

    const sizes = Array.from({ length: 12 }, (a, b) => b + 1)

    it('should be in a windowed environment', () => {
      expect(window).toExist()
    })

    context('when below sm breakpoint', () => {
      if (window.matchMedia('(min-width: 32em)').matches) {
        return false
      }

      describe('sm prop', () => {
        sizes.forEach((size) => {
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ sm: size })
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).toEqual('')
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).toEqual('')
            })
          })
        })
      })

      describe('md prop', () => {
        sizes.forEach((size) => {
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ md: size })
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).toEqual('')
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).toEqual('')
            })
          })
        })
      })

      describe('lg prop', () => {
        sizes.forEach((size) => {
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ lg: size })
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).toEqual('')
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).toEqual('')
            })
          })
        })
      })
    })

    context('when between sm and md breakpoints', () => {
      if (!window.matchMedia('(min-width: 32em) and (max-width: 48em)').matches) {
        return false
      }

      describe('sm prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ sm: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).toEqual(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('md prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ md: size })
              expected = ''
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).toEqual(expected)
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('lg prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ lg: size })
              expected = ''
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).toEqual(expected)
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('sm, md, and lg props', () => {
        let expected
        expected = round(6 / 12 * 100, 2)

        beforeEach(() => {
          setProps({ sm: 6, md: 4, lg: 3 })
          width = round(parseFloat(computed.width), 2)
          flexBasis = round(parseFloat(computed.flexBasis), 2)
        })

        it(`should have width set to ${expected}%`, () => {
          expect(width).toEqual(expected)
        })

        it(`should have flex-basis set to ${expected}%`, () => {
          expect(flexBasis).toEqual(expected)
        })
      })
    })

    context('when between md and lg breakpoints', () => {
      if (!window.matchMedia('(min-width: 48em) and (max-width: 64em)').matches) {
        return false
      }

      describe('sm prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ sm: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).toEqual(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('md prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ md: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).toEqual(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('lg prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            beforeEach(() => {
              setProps({ lg: size })
              expected = ''
              width = computed.width
              flexBasis = computed.flexBasis
            })

            it(`should not have width set`, () => {
              expect(width).toEqual(expected)
            })

            it(`should not have flex-basis set`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('sm, md, and lg props', () => {
        let expected
        expected = round(4 / 12 * 100, 2)

        beforeEach(() => {
          setProps({ sm: 6, md: 4, lg: 3 })
          width = round(parseFloat(computed.width), 2)
          flexBasis = round(parseFloat(computed.flexBasis), 2)
        })

        it(`should have width set to ${expected}%`, () => {
          expect(width).toEqual(expected)
        })

        it(`should have flex-basis set to ${expected}%`, () => {
          expect(flexBasis).toEqual(expected)
        })
      })
    })

    context('when above the lg breakpoints', () => {
      if (!window.matchMedia('(min-width: 64em)').matches) {
        return false
      }

      describe('sm prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ sm: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).toEqual(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('md prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ md: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).toEqual(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('lg prop', () => {
        sizes.forEach((size) => {
          let expected
          context(`when set to ${size}`, () => {
            expected = round(size / 12 * 100, 2)
            beforeEach(() => {
              setProps({ lg: size })
              expected = round(size / 12 * 100, 2)
              width = round(parseFloat(computed.width), 2)
              flexBasis = round(parseFloat(computed.flexBasis), 2)
            })

            it(`should have width set to ${expected}%`, () => {
              expect(width).toEqual(expected)
            })

            it(`should have flex-basis set to ${expected}%`, () => {
              expect(flexBasis).toEqual(expected)
            })
          })
        })
      })

      describe('sm, md, and lg props', () => {
        let expected
        expected = round(3 / 12 * 100, 2)

        beforeEach(() => {
          setProps({ sm: 6, md: 4, lg: 3 })
          width = round(parseFloat(computed.width), 2)
          flexBasis = round(parseFloat(computed.flexBasis), 2)
        })

        it(`should have width set to ${expected}%`, () => {
          expect(width).toEqual(expected)
        })

        it(`should have flex-basis set to ${expected}%`, () => {
          expect(flexBasis).toEqual(expected)
        })
      })
    })

    context('when setting custom breakpoints in React context', () => {
      const ctx = {
        reflexbox: {
          breakpoints: {
            mobile: '(min-width: 30em)',
            tablet: '(min-width: 48em)',
            desktop: '(min-width: 60em)'
          }
        }
      }

      class ContextRoot extends React.Component {
        static childContextTypes = {
          reflexbox: React.PropTypes.object
        }
        getChildContext () { return ctx }
        render () { return <div {...this.props} /> }
      }

      context('when below the tablet breakpoint', () => {
        if (!window.matchMedia('(max-width: 48em)').matches) {
          return false
        }

        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <ContextRoot>
              <Box tablet={6} />
            </ContextRoot>
          )
          computed = TestUtils.findRenderedDOMComponentWithClass(root, 'Box').style
        })

        it('should not set width', () => {
          expect(computed.width).toEqual('')
        })

        it('should not set flex-basis', () => {
          expect(computed.flexBasis).toEqual('')
        })
      })

      context('when above the tablet breakpoint', () => {
        if (!window.matchMedia('(min-width: 48em)').matches) {
          return false
        }

        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <ContextRoot>
              <Box tablet={6} />
            </ContextRoot>
          )
          computed = TestUtils.findRenderedDOMComponentWithClass(root, 'Box').style
        })

        it('should set width', () => {
          expect(computed.width).toEqual('50%')
        })

        it('should set flex-basis', () => {
          expect(computed.flexBasis).toEqual('50%')
        })
      })
    })
  })
})

