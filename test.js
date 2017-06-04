require('browser-env')()
const test = require('ava')
const config = require('./src/config')
const css = require('./src/css').default(config)

test('css returns an array', t => {
  t.is(typeof css, 'function')
  const a = css('.foo', {})
  t.true(Array.isArray(a))
})

test('css handles width', t => {
  const a = css('.foo', {
    w: 1
  })
  t.true(Array.isArray(a))
  t.is(a.length, 1)
  t.regex(a[0], /width:100%/)
})

test('css handles responsive widths', t => {
  const a = css('.foo', {
    w: [ 1, 1/2, 1/4 ]
  })
  t.true(Array.isArray(a))
  t.is(a.length, 3)
  t.regex(a[0], /width:100%/)
  t.regex(a[1], /width:50%/)
  t.regex(a[2], /width:25%/)
})

test('css handles margin', t => {
  const a = css('.foo', { m: 1 })
  t.regex(a[0], /margin:8px/)
})
