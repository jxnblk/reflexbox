
import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import jsdom from 'jsdom-global'
import { Flex } from '../src'

jsdom()

describe('Flex', () => {
  let wrapper
  let inner

  before(() => {
    window.matchMedia = () => ({ matches: false })
  })

  it('should render', () => {
    expect(() => {
      wrapper = mount(<Flex className='hello' p={2} />)
      inner = wrapper.find('ReflexWrap')
    }).toNotThrow()
    expect(wrapper).toExist()
  })

  it('should pass props to root component', () => {
    expect(inner.props().className).toEqual('Flex hello')
    expect(inner.props().p).toEqual(2)
  })
})

