
import assign from 'object-assign'
import React from 'react'
import expect from 'expect'
import TestUtils from 'react-addons-test-utils'
import { Flex, Base } from '../src'

const renderer = TestUtils.createRenderer()

describe('Flex', () => {
  let tree, style, computed

  beforeEach(() => {
    renderer.render(<Flex />)
    tree = renderer.getRenderOutput()
    style = tree.props.style
  })

  it('should render', () => {
    expect(tree.type).toEqual(Base)
  })

  it('should have no styles by default', () => {
    expect(style).toNotExist()
  })

  context('when setting style prop', () => {
    beforeEach(() => {
      renderer.render(<Flex style={{ backgroundColor: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should assign styles', () => {
      expect(style).toEqual({ backgroundColor: 'tomato' })
    })
  })

  context('when setting className prop', () => {
    let className
    beforeEach(() => {
      renderer.render(<Flex className='Flex--custom' />)
      tree = renderer.getRenderOutput()
      className = tree.props.className
    })

    it('should add a class', () => {
      expect(className).toEqual('Flex--custom')
    })
  })

  context('when no className is set', () => {
    let className
    beforeEach(() => {
      renderer.render(<Flex />)
      tree = renderer.getRenderOutput()
      className = tree.props.className
    })

    it('should not add a class', () => {
      expect(className).toNotExist()
    })
  })

  context('when wrap prop is true', () => {
    beforeEach(() => {
      renderer.render(<Flex wrap />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set flex-wrap wrap', () => {
      expect(style).toEqual({ display: 'flex', flexWrap: 'wrap' })
    })
  })

  context('when column prop is true', () => {
    beforeEach(() => {
      renderer.render(<Flex column />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set flex-direction column', () => {
      expect(style).toEqual({ display: 'flex', flexDirection: 'column' })
    })
  })

  context('when align prop is set to stretch', () => {
    beforeEach(() => {
      renderer.render(<Flex align='stretch' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set align-items stretch', () => {
      expect(style).toEqual({ display: 'flex', alignItems: 'stretch' })
    })
  })

  context('when align prop is set to center', () => {
    beforeEach(() => {
      renderer.render(<Flex align='center' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set align-items center', () => {
      expect(style).toEqual({ display: 'flex', alignItems: 'center' })
    })
  })

  context('when align prop is set to baseline', () => {
    beforeEach(() => {
      renderer.render(<Flex align='baseline' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set align-items baseline', () => {
      expect(style).toEqual({ display: 'flex', alignItems: 'baseline' })
    })
  })

  context('when align prop is set to flex-start', () => {
    beforeEach(() => {
      renderer.render(<Flex align='flex-start' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set align-items baseline', () => {
      expect(style).toEqual({ display: 'flex', alignItems: 'flex-start' })
    })
  })

  context('when align prop is set to flex-end', () => {
    beforeEach(() => {
      renderer.render(<Flex align='flex-end' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set align-items baseline', () => {
      expect(style).toEqual({ display: 'flex', alignItems: 'flex-end' })
    })
  })

  context('when justify prop is set to center', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='center' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set justify-content center', () => {
      expect(style).toEqual({ display: 'flex', justifyContent: 'center' })
    })
  })

  context('when justify prop is set to space-around', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='space-around' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set justify-content space-around', () => {
      expect(style).toEqual({ display: 'flex', justifyContent: 'space-around' })
    })
  })

  context('when justify prop is set to space-between', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='space-between' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set justify-content space-between', () => {
      expect(style).toEqual({ display: 'flex', justifyContent: 'space-between' })
    })
  })

  context('when justify prop is set to flex-start', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='flex-start' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set justify-content flex-start', () => {
      expect(style).toEqual({ display: 'flex', justifyContent: 'flex-start' })
    })
  })

  context('when justify prop is set to flex-end', () => {
    beforeEach(() => {
      renderer.render(<Flex justify='flex-end' />)
      tree = renderer.getRenderOutput()
      style = tree.props._style
    })

    it('should set justify-content flex-end', () => {
      expect(style).toEqual({ display: 'flex', justifyContent: 'flex-end' })
    })
  })

  describe('media queries', () => {
    if (typeof window === 'undefined') {
      return false
    }

    class Root extends React.Component {
      render () { return <div {...this.props} /> }
    }

    it('should be in a windowed environment', () => {
      expect(window).toExist()
    })

    context('when below sm breakpoint', () => {
      let root, flex

      if (window.matchMedia('(min-width: 32em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })
    })

    context('when between sm and md breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 32em) and (max-width: 48em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })
    })

    context('when between md and lg breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 48em) and (max-width: 64em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display block', () => {
          expect(computed.display).toEqual('block')
        })
      })
    })

    context('when above lg breakpoints', () => {
      let root, flex

      if (!window.matchMedia('(min-width: 64em)').matches) {
        return false
      }

      context('with no props', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with sm set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex sm />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with md set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex md />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })

      context('with lg set', () => {
        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <Root>
              <Flex lg />
            </Root>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })
    })

    context('when setting custom breakpoints in React context', () => {
      let root, flex

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
              <Flex tablet />
            </ContextRoot>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should not set display flex', () => {
          expect(computed.display).toEqual('block')
        })
      })

      context('when above the tablet breakpoint', () => {
        if (!window.matchMedia('(min-width: 48em)').matches) {
          return false
        }

        beforeEach(() => {
          root = TestUtils.renderIntoDocument(
            <ContextRoot>
              <Flex tablet />
            </ContextRoot>
          )
          flex = TestUtils.findRenderedDOMComponentWithClass(root, 'Flex')
          computed = flex.style
        })

        it('should set display flex', () => {
          expect(computed.display).toEqual('flex')
        })
      })
    })
  })
})
