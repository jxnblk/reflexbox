
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

  it('should have box-sizing by default', () => {
    expect(style).toEqual({ boxSizing: 'border-box' })
  })

  context('when setting style prop', () => {
    beforeEach(() => {
      renderer.render(<Base style={{ backgroundColor: 'tomato' }} />)
      tree = renderer.getRenderOutput()
      style = tree.props.style
    })

    it('should assign styles', () => {
      expect(style).toEqual({ boxSizing: 'border-box', backgroundColor: 'tomato' })
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
      expect(style).toEqual({ boxSizing: 'border-box', backgroundColor: 'green' })
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

  context('when setting is prop', () => {
    beforeEach(() => {
      renderer.render(<Base is='ul' />)
      tree = renderer.getRenderOutput()
    })

    it('should render a ul', () => {
      expect(tree.type).toEqual('ul')
    })
  })

  context('when setting a component with the is prop', () => {
    class Test extends React.Component {
      render () { return (<span {...this.props} />) }
    }
    beforeEach(() => {
      renderer.render(<Base is={Test} />)
      tree = renderer.getRenderOutput()
    })

    it('should render a Test component', () => {
      expect(tree.type).toEqual(Test)
    })
  })

  context('when passing custom Reflexbox props', () => {
    beforeEach(() => {
      renderer.render(
        <Base
          is='div'
          _style={{ color: 'black' }}
          _className='black'
          m={1} mt={1} mr={1} mb={1} ml={1} mx={1} my={1}
          p={1} pt={1} pr={1} pb={1} pl={1} px={1} py={1}
        />
      )
      tree = renderer.getRenderOutput()
    })
    it('should not pass custom props to DOM elements', () => {
      expect(tree.props.m).toNotExist()
      expect(tree.props.mt).toNotExist()
      expect(tree.props.mr).toNotExist()
      expect(tree.props.mb).toNotExist()
      expect(tree.props.ml).toNotExist()
      expect(tree.props.mx).toNotExist()
      expect(tree.props.my).toNotExist()
      expect(tree.props.p).toNotExist()
      expect(tree.props.pt).toNotExist()
      expect(tree.props.pr).toNotExist()
      expect(tree.props.pb).toNotExist()
      expect(tree.props.pl).toNotExist()
      expect(tree.props.px).toNotExist()
      expect(tree.props.py).toNotExist()
      expect(tree.props.is).toNotExist()
      expect(tree.props._style).toNotExist()
      expect(tree.props._className).toNotExist()
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
        return <div children={this.props.children} />
      }
    }

    const render = (children, ctx) => {
      const content = React.cloneElement(children, { _className: 'Test' })
      const root = TestUtils.renderIntoDocument(
        <Root ctx={ctx}>{content}</Root>
      )
      const base = TestUtils.findRenderedDOMComponentWithClass(root, 'Test')
      return { root, base }
    }

    describe('padding', () => {
      let tree

      context('when p prop is set', () => {
        beforeEach(() => {
          tree = render(<Base p={1} />)
        })

        it('should have padding', () => {
          expect(tree.base.style.padding).toEqual('8px')
        })
      })

      context('when px prop is set', () => {
        beforeEach(() => {
          tree = render(<Base px={1} />)
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
          tree = render(<Base p={2} px={1} />)
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

      context('when p, pr, and px prop are set', () => {
        beforeEach(() => {
          tree = render(<Base p={2} pr={3} px={1} />)
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

      context('when py prop is set', () => {
        beforeEach(() => {
          tree = render(<Base py={1} />)
        })

        it('should have padding top and bottom', () => {
          expect(tree.base.style.paddingTop).toEqual('8px')
        })
      })

      context('when pt prop is set', () => {
        beforeEach(() => {
          tree = render(<Base pt={1} />)
        })

        it('should have padding top', () => {
          expect(tree.base.style.paddingTop).toEqual('8px')
        })
      })

      context('when pr prop is set', () => {
        beforeEach(() => {
          tree = render(<Base pr={1} />)
        })

        it('should have padding right', () => {
          expect(tree.base.style.paddingRight).toEqual('8px')
        })
      })

      context('when pb prop is set', () => {
        beforeEach(() => {
          tree = render(<Base pb={1} />)
        })

        it('should have padding bottom', () => {
          expect(tree.base.style.paddingBottom).toEqual('8px')
        })
      })

      context('when pl prop is set', () => {
        beforeEach(() => {
          tree = render(<Base pl={1} />)
        })

        it('should have padding left', () => {
          expect(tree.base.style.paddingLeft).toEqual('8px')
        })
      })
    })

    describe('margin', () => {
      context('when m prop is set', () => {
        beforeEach(() => {
          tree = render(<Base m={1} />)
        })

        it('should have margin', () => {
          expect(tree.base.style.margin).toEqual('8px')
        })
      })

      context('when mx prop is set', () => {
        beforeEach(() => {
          tree = render(<Base mx={1} />)
        })

        it('should have margin left and right', () => {
          expect(tree.base.style.marginLeft).toEqual('8px')
          expect(tree.base.style.marginRight).toEqual('8px')
        })
      })

      context('when my prop is set', () => {
        beforeEach(() => {
          tree = render(<Base my={1} />)
        })

        it('should have margin top and bottom', () => {
          expect(tree.base.style.marginTop).toEqual('8px')
          expect(tree.base.style.marginBottom).toEqual('8px')
        })
      })

      context('when mt prop is set', () => {
        beforeEach(() => {
          tree = render(<Base mt={1} />)
        })

        it('should have margin top', () => {
          expect(tree.base.style.marginTop).toEqual('8px')
        })
      })

      context('when mr prop is set', () => {
        beforeEach(() => {
          tree = render(<Base mr={1} />)
        })

        it('should have margin right', () => {
          expect(tree.base.style.marginRight).toEqual('8px')
        })
      })

      context('when mb prop is set', () => {
        beforeEach(() => {
          tree = render(<Base mb={1} />)
        })

        it('should have margin bottom', () => {
          expect(tree.base.style.marginBottom).toEqual('8px')
        })
      })

      context('when ml prop is set', () => {
        beforeEach(() => {
          tree = render(<Base ml={1} />)
        })

        it('should have margin left', () => {
          expect(tree.base.style.marginLeft).toEqual('8px')
        })
      })
    })
  })
})

