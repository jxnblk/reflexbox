// parse space props
const parse = _props => {
  const [ attr, styles ] = objArr(_props).reduce(sep(isStyle), [])
  const props = arrObj(attr)

  const rules = styles
    .map(expand)
    .reduce(flatten, [])
    .map(createRules)
    .reduce(group, [])

  return [ props, rules ]
}

const REG = /^[wmp][trblxy]?$/
const isStyle = ([ key, val ]) => REG.test(key)
const objArr = obj => Object.keys(obj).map(key => [ key, obj[key] ])
const arrObj = arr => arr.reduce((a, [ key, val ]) => Object.assign(a, { [key]: val }), {})

const sep = test => ([ x = [], y = []], b) =>
  test(b)
  ? [ x, [ ...y, b ] ]
  : [ [ ...x, b ], y ]

const toArr = n => Array.isArray(n) ? n : [ n ]

const num = n => typeof n === 'number' && !isNaN(n)
// todo: make dynamic
const scale = [ 0, 8, 16, 32, 64 ]
const width = n => !num(n) || n > 1 ? n : (n * 100) + '%'
const space = arr => n => {
  if (!num(n)) return n
  const i = Math.abs(n)
  const neg = n < 0 ? -1 : 1
  return (arr[i] || i) * neg + 'px'
}
const createRules = ([ key, val ]) => toArr(val)
  .map((v, i) => {
    const parse = key === 'width' ? width : space(scale)
    return [ key, parse(v) ]
  })

const expand = ([ key, val ]) => {
  const [ a, b ] = key.split('')
  const prop = shorts[a]
  const dirs = directions[b] || ['']
  return dirs.map(dir => [ prop + dir, val ])
}
const flatten = (a, b) => [ ...a, ...b ]

const group = (a, b) => {
  b.forEach((dec, i) => {
    a[i] = a[i] || []
    a[i].push(dec)
  })
  return a
}

const shorts = {
  w: 'width',
  m: 'margin',
  p: 'padding'
}

const directions = {
  t: [ '-top' ],
  r: [ '-right' ],
  b: [ '-bottom' ],
  l: [ '-left' ],
  x: [ '-left', '-right' ],
  y: [ '-top', '-bottom' ],
}

export default parse
