
import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import jsdom from 'jsdom-global'
import { Box } from '../src'

jsdom()

describe('Box', () => {
  let wrapper
  let inner

  before(() => {
    window.matchMedia = () => ({ matches: false })
    wrapper = mount(<Box col={6} p={2} />)
    inner = wrapper.find('Wrapped')
  })

  it('should render', () => {
    expect(() => {
      wrapper = mount(<Box col={6} p={2} />)
      inner = wrapper.find('Wrapped')
    }).toNotThrow()
    expect(wrapper).toExist()
  })

  it('should pass props to root component', () => {
    expect(inner.props()).toEqual({
      className: 'Box',
      col: 6,
      p: 2
    })
  })

  it('should pass className props', () => {
    wrapper = mount(<Box className='hello' />)
    inner = wrapper.find('Wrapped')
    expect(inner.props().className).toEqual('Box hello')
  })

  it('should rename `auto` prop', () => {
    wrapper = mount(<Box auto />)
    inner = wrapper.find('Wrapped')
    expect(inner.props()).toEqual({
      className: 'Box',
      flexAuto: true
    })
  })
})

