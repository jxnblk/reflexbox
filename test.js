require('browser-env')()
const test = require('ava')
const React = require('react')
const render = require('react-test-renderer').create
const {
  sheet,
  css,
  config,
  ReflexProvider,
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

const cx = css(config)

test.afterEach(t => {
  css.reset()
})

test('css returns props', t => {
  const a = cx(props)
  t.is(typeof a, 'object')
})

test('css passes props through', t => {
  const a = cx(props)
  t.is(a.children, 'Hello')
  t.is(a.title, 'Boop')
})

test('css strips style props', t => {
  const a = cx(props)
  t.is(a.w, undefined)
  t.is(a.m, undefined)
  t.is(a.flex, undefined)
  t.is(a.px, undefined)
})

test('css adds a className prop', t => {
  const a = cx(props)
  t.is(typeof a.className, 'string')
})

test('css inserts styles to sheet', t => {
  const a = cx({ m: 2 })
  t.is(sheet.cssRules.length, 1)
  const [ rule ] = sheet.cssRules
  t.is(rule.style.margin, '16px')
})

test('css inserts responsive styles', t => {
  const a = css(config)({ m: [ 1, 2 ] })
  t.is(sheet.cssRules.length, 2)
  const [ baseRule, mobile ] = sheet.cssRules
  const [ mobileRule ] = mobile.cssRules
  t.is(baseRule.style.margin, '8px')
  t.is(mobileRule.style.margin, '16px')
})

test('css dedupes repeated styles', t => {
  const a = cx({ p: 2 })
  const b = cx({ p: 2 })
  t.is(sheet.cssRules.length, 1)
  t.deepEqual(a, b)
})

test('css parses widths', t => {
  const a = cx({ w: 1 })
  const b = cx({ w: 1/2 })
  const c = cx({ w: 0 })
  const d = cx({ w: 24 })
  const e = cx({ w: 'auto' })
  const rules = sheet.cssRules
  t.is(rules[0].style.width, '100%')
  t.is(rules[1].style.width, '50%')
  t.is(rules[2].style.width, '0%')
  t.is(rules[3].style.width, '24px')
  t.is(rules[4].style.width, 'auto')
})

test('css parses margins', t => {
  cx({ m: 1 })
  cx({ m: -2 })
  cx({ m: 24 })
  cx({ m: -24 })
  cx({ m: 'auto' })
  const [ a, b, c, d, e ] = sheet.cssRules
  t.is(a.style.margin, '8px')
  t.is(b.style.margin, '-16px')
  t.is(c.style.margin, '24px')
  t.is(d.style.margin, '-24px')
  t.is(e.style.margin, 'auto')
})

test('css parses margin directions', t => {
  cx({ m: 1 })
  cx({ mt: 1 })
  cx({ mr: 1 })
  cx({ mb: 1 })
  cx({ ml: 1 })
  cx({ mx: 1 })
  cx({ my: 1 })
  const [ a, top, r, b, l, x, y  ] = sheet.cssRules
  t.is(a.style.margin, '8px')
  t.is(top.style['margin-top'], '8px')
  t.is(r.style['margin-right'], '8px')
  t.is(b.style['margin-bottom'], '8px')
  t.is(l.style['margin-left'], '8px')
  t.is(x.style['margin-left'], '8px')
  t.is(x.style['margin-right'], '8px')
  t.is(y.style['margin-top'], '8px')
  t.is(y.style['margin-bottom'], '8px')
})

test('css parses paddings', t => {
  cx({ p: 1 })
  cx({ p: 24 })
  cx({ p: '20%' })
  const [ a, b, c ] = sheet.cssRules
  t.is(a.style.padding, '8px')
  t.is(b.style.padding, '24px')
  t.is(c.style.padding, '20%')
})

test('css parses padding directions', t => {
  cx({ p: 1 })
  cx({ pt: 1 })
  cx({ pr: 1 })
  cx({ pb: 1 })
  cx({ pl: 1 })
  cx({ px: 1 })
  cx({ py: 1 })
  const [ a, top, r, b, l, x, y  ] = sheet.cssRules
  t.is(a.style.padding, '8px')
  t.is(top.style['padding-top'], '8px')
  t.is(r.style['padding-right'], '8px')
  t.is(b.style['padding-bottom'], '8px')
  t.is(l.style['padding-left'], '8px')
  t.is(x.style['padding-left'], '8px')
  t.is(x.style['padding-right'], '8px')
  t.is(y.style['padding-top'], '8px')
  t.is(y.style['padding-bottom'], '8px')
})

test('css parses flexbox styles', t => {
  cx({
    flex: true,
    wrap: true,
    column: true,
    auto: true,
    order: 5,
    align: 'center',
    justify: 'space-between'
  })
  const [ a, b, c, d, e, f, g ] = sheet.cssRules
  t.is(a.style.display, 'flex')
  t.is(b.style['flex-wrap'], 'wrap')
  t.is(c.style['flex-direction'], 'column')
  t.is(d.style.flex, '1 1 auto')
  t.is(e.style.order, '5')
  t.is(f.style['align-items'], 'center')
  t.is(g.style['justify-content'], 'space-between')
})

test('css handles falsy styles', t => {
  cx({
    flex: false,
    wrap: false,
    column: false,
    auto: false,
    p: 0,
    align: undefined,
    justify: undefined
  })
  const [ a ] = sheet.cssRules
  t.is(sheet.cssRules.length, 1)
  t.is(a.style['padding'], '0px')
})

test('snapshot', t => {
  const box = render(<Box />).toJSON()
  const flex = render(<Flex />).toJSON()
  t.snapshot(box)
  t.snapshot(flex)
})

test('react context', t => {
  const ctx = {
    space: [ 0, 6, 12, 18, 24, 30 ],
    breakpoints: [ 32, 48, 64 ]
  }
  const box = render(
    <ReflexProvider {...ctx}>
      <Box m={1} w={[ 1, 1/2 ]} />
    </ReflexProvider>
  ).toJSON()
  const [ m, w1, w2 ] = sheet.cssRules
  t.snapshot(box)
  t.is(m.style.margin, '6px')
  t.is(w1.style.width, '100%')
  t.is(w2.media[0], 'screen and (min-width:32em)')
})
