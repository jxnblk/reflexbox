
import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import jsdom from 'jsdom-global'
import { Reflex } from '../src'

jsdom()

const Box = Reflex('div')

describe('Reflex', () => {
  let wrapper
  let inner

  before(() => {
    window.matchMedia = () => ({ matches: false })
  })

  it('should render', () => {
    expect(() => {
      wrapper = mount(<Box col={6} p={2} />)
      inner = wrapper.find('WrappedComponent') // Named in Robox
    }).toNotThrow()
    expect(wrapper).toExist()
  })

  it('should pass props to root component', () => {
    expect(inner.props()).toEqual({
      col: 6,
      p: 2
    })
  })

  it('should have no matches', () => {
    expect(wrapper.state('matches')).toEqual([])
  })

  describe('sm breakpoint', () => {
    before(() => {
      window.matchMedia = query => ({
        matches: /32/.test(query)
      })
      wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />)
      inner = wrapper.find('WrappedComponent')
    })

    it('should set matches state', () => {
      expect(wrapper.state('matches')).toEqual([
        'sm'
      ])
    })

    it('should pass the correct props', () => {
      expect(inner.props()).toEqual({
        col: 3
      })
    })
  })

  describe('md breakpoint', () => {
    before(() => {
      window.matchMedia = query => ({
        matches: /48/.test(query)
      })
      wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />)
      inner = wrapper.find('WrappedComponent')
    })

    it('should set matches state', () => {
      expect(wrapper.state('matches')).toEqual([
        'md'
      ])
    })

    it('should pass the correct props', () => {
      expect(inner.props()).toEqual({
        col: 2
      })
    })
  })

  describe('lg breakpoint', () => {
    before(() => {
      window.matchMedia = query => ({
        matches: /64/.test(query)
      })
      wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />)
      inner = wrapper.find('WrappedComponent')
    })

    it('should set matches state', () => {
      expect(wrapper.state('matches')).toEqual([
        'lg'
      ])
    })

    it('should pass the correct props', () => {
      expect(inner.props()).toEqual({
        col: 1
      })
    })
  })

  context('with breakpoints configured in context', () => {
    describe('sm breakpoint', () => {
      before(() => {
        window.matchMedia = query => ({
          matches: /24/.test(query)
        })
        wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />, {
          context: {
            reflexbox: {
              breakpoints: {
                sm: '(min-width:24em)',
                md: '(min-width:36em)',
                lg: '(min-width:48em)'
              }
            }
          }
        })
        inner = wrapper.find('WrappedComponent')
      })

      it('should set matches state', () => {
        expect(wrapper.state('matches')).toEqual([
          'sm'
        ])
      })

      it('should pass the correct props', () => {
        expect(inner.props()).toEqual({
          col: 3
        })
      })
    })

    describe('md breakpoint', () => {
      before(() => {
        window.matchMedia = query => ({
          matches: /36/.test(query)
        })
        wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />, {
          context: {
            reflexbox: {
              breakpoints: {
                sm: '(min-width:24em)',
                md: '(min-width:36em)',
                lg: '(min-width:48em)'
              }
            }
          }
        })
        inner = wrapper.find('WrappedComponent')
      })

      it('should set matches state', () => {
        expect(wrapper.state('matches')).toEqual([
          'md'
        ])
      })

      it('should pass the correct props', () => {
        expect(inner.props()).toEqual({
          col: 2
        })
      })
    })

    describe('lg breakpoint', () => {
      before(() => {
        window.matchMedia = query => ({
          matches: /48/.test(query)
        })
        wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />, {
          context: {
            reflexbox: {
              breakpoints: {
                sm: '(min-width:24em)',
                md: '(min-width:36em)',
                lg: '(min-width:48em)'
              }
            }
          }
        })
        inner = wrapper.find('WrappedComponent')
      })

      it('should set matches state', () => {
        expect(wrapper.state('matches')).toEqual([
          'lg'
        ])
      })

      it('should pass the correct props', () => {
        expect(inner.props()).toEqual({
          col: 1
        })
      })
    })
  })
})

