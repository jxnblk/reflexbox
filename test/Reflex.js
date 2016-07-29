
import React from 'react'
import { mount } from 'enzyme'
import expect from 'expect'
import jsdom from 'jsdom-global'
import { Reflex } from '../src'

jsdom()

const Box = Reflex('div')

describe('Reflex', () => {
  let wrapper

  before(() => {
    wrapper = mount(<Box />)
  })
})

