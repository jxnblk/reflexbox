
import { assign, round } from 'lodash'
import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import { Box } from '../src'

const renderer = TestUtils.createRenderer()

describe('Box', () => {
  let tree, style

  const initial = {
    boxSizing: 'border-box',
    flex: null,
    display: null,
    padding: null,
    paddingTop: null,
    paddingBottom: null,
    paddingLeft: null,
    paddingRight: null,
    width: null,
    flexBasis: null
  }

  beforeEach(() => {
    renderer.render(<Box />)
    tree = renderer.getRenderOutput()
    style = tree.props.style
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have no styles by default', () => {
    expect(style).toEqual(initial)
  })

  context('when setting style prop', () => {
    beforeEach(() => {
      renderer.render(<Box style={{ backgroundColor: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should assign styles', () => {
      expect(style).toEqual(assign({ backgroundColor: 'tomato' }, initial))
    })
  })

  context('when setting className prop', () => {
    beforeEach(() => {
      renderer.render(<Box className='Box--custom' />)
      tree = renderer.getRenderOutput()
    })

    it('should add a class', () => {
      expect(tree.props.className).toEqual('Box Box--custom')
    })
  })

  context('when no className is set', () => {
    beforeEach(() => {
      renderer.render(<Box />)
      tree = renderer.getRenderOutput()
    })

    it('should not add a class', () => {
      expect(tree.props.className).toEqual('Box')
    })
  })

  context('when p prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box p={1} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should have padding', () => {
      const computed = assign({}, style, { padding: 8 })
      expect(style).toEqual(computed)
    })
  })

  context('when px prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box px={1} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should have padding left and right', () => {
      const computed = assign({}, style, {
        paddingLeft: 8,
        paddingRight: 8
      })
      expect(style).toEqual(computed)
    })
  })

  context('when py prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box py={1} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should have padding top and bottom', () => {
      const computed = assign({}, style, {
        paddingTop: 8,
        paddingBottom: 8
      })
      expect(style).toEqual(computed)
    })
  })

  context('when pt prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box pt={1} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should have padding top', () => {
      const computed = assign({}, style, {
        paddingTop: 8
      })
      expect(style).toEqual(computed)
    })
  })

  context('when pr prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box pr={1} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should have padding right', () => {
      const computed = assign({}, style, {
        paddingRight: 8
      })
      expect(style).toEqual(computed)
    })
  })

  context('when pb prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box pb={1} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should have padding bottom', () => {
      const computed = assign({}, style, {
        paddingBottom: 8
      })
      expect(style).toEqual(computed)
    })
  })

  context('when pl prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box px={1} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should have padding left', () => {
      const computed = assign({}, style, {
        paddingLeft: 8
      })
      expect(style).toEqual(computed)
    })
  })

  context('when flex prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box flex />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should have padding', () => {
      const computed = assign({}, style, { display: 'flex' })
      expect(style).toEqual(computed)
    })
  })


  context('when auto prop is set', () => {
    beforeEach(() => {
      renderer.render(<Box auto />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should set flex: 1 1 auto', () => {
      const computed = assign({}, style, { flex: '1 1 auto' })
      expect(style).toEqual(computed)
    })
  })

  describe('col prop', () => {
    context('when set to 1', () => {
      beforeEach(() => {
        renderer.render(<Box col={1} />)
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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
        style = renderer.getRenderOutput().props.style
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

  describe('React context', () => {
    context('when setting scale', () => {
      it('should pick up new scale values')
    })
    context('when setting breakpoints', () => {
      it('should pick up new breakpoints values')
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
  })
})

