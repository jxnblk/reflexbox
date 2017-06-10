require('browser-env')()
const test = require('ava')
const React = require('react')
const render = require('react-test-renderer').create
const {
  css,
  config,
  Box,
  Flex
} = require('./src')

const props = {
  children: 'Hello',
  title: 'Boop',
  w: [ 1, 1/2, 1/4 ],
  m: 2,
  flex: true,
  px: 3
}

test('css returns props', t => {
  const a = css(config)(props)
  t.is(typeof a, 'object')
})

test('css passes props through', t => {
  const a = css(config)(props)
  t.is(a.children, 'Hello')
  t.is(a.title, 'Boop')
})

test('css strips style props', t => {
  const a = css(config)(props)
  t.is(a.w, undefined)
  t.is(a.m, undefined)
  t.is(a.flex, undefined)
  t.is(a.px, undefined)
})

test('css adds a className prop', t => {
  const a = css(config)(props)
  t.is(typeof a.className, 'string')
})

test('snapshot', t => {
  const box = render(<Box />).toJSON()
  const flex = render(<Flex />).toJSON()
  t.snapshot(box)
  t.snapshot(flex)
})
