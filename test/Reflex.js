
import React from 'react'
import test from 'ava'
import { mount } from 'enzyme'
import jsdom from 'jsdom-global'
import { Reflex } from '../src'

let wrapper
let button
let inner

jsdom()

window.matchMedia = () => ({ matches: false })

const Box = Reflex('div')
const Button = Reflex(p => <button {...p} />)

test('renders', t => {
  t.notThrows(() => {
    button = mount(<Button flex col={6} />)
    wrapper = mount(<Box flex col={6} p={2} />)
    inner = wrapper.find('ReflexWrap')
  })
})

test('passes props', t => {
  t.deepEqual(inner.props(), {
    flex: true,
    col: 6,
    p: 2
  })
  t.deepEqual(button.find('ReflexWrap').props(), {
    flex: true,
    col: 6
  })
})

test('applies styles', t => {
  const { style } = wrapper.find('div').props()
  t.is(typeof style.display, 'string')
  t.is(typeof button.find('button').props().style.display, 'string')
})

test('has no matches', t => {
  t.deepEqual(wrapper.state('matches'), [])
})

test('renames `column` prop', t => {
  wrapper = mount(<Box column />)
  inner = wrapper.find('WrappedComponent')
  t.deepEqual(inner.props(), {
    col: null,
    flexColumn: true
  })
})

test('renames `auto` prop', t => {
  wrapper = mount(<Box auto />)
  inner = wrapper.find('WrappedComponent')
  t.deepEqual(inner.props(), {
    col: null,
    flexAuto: true
  })
})

test('sm breakpoint', t => {
  window.matchMedia = query => ({
    matches: /32/.test(query)
  })
  wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />)
  inner = wrapper.find('WrappedComponent')

  t.deepEqual(wrapper.state('matches'), [ 'sm' ])
  t.deepEqual(inner.props(), { col: 3 })
})

test('md breakpoint', t => {
  window.matchMedia = query => ({
    matches: /48/.test(query)
  })
  wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />)
  inner = wrapper.find('WrappedComponent')

  t.deepEqual(wrapper.state('matches'), [ 'md' ])
  t.deepEqual(inner.props(), { col: 2 })
})

test('lg breakpoint', t => {
  window.matchMedia = query => ({
    matches: /64/.test(query)
  })
  wrapper = mount(<Box col={6} sm={3} md={2} lg={1} />)
  inner = wrapper.find('WrappedComponent')

  t.deepEqual(wrapper.state('matches'), [ 'lg' ])
  t.deepEqual(inner.props(), { col: 1 })
})

test('custom breakpoints', t => {
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

  t.deepEqual(wrapper.state('matches'), [ 'sm' ])
  t.deepEqual(inner.props(), {
    col: 3
  })
})

// Needs work
test('accepts ref attribute', t => {
  class Root extends React.Component {
    render () {
      return (
        <div>
          <Box ref='box' />
        </div>
      )
    }
  }
  wrapper = mount(<Root />)
  t.truthy(wrapper.ref('box'))
})

