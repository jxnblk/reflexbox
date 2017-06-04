import sheet from './sheet'
import {
  toArr,
  num
} from './util'

const REG = /^([wmp][trblxy]?|flex|wrap|column|align|justify)$/
const cache = {}

const css = config => props => {
  const next = {}
  const classNames = []

  const breaks = [ null, ...config.breakpoints ]

  for (let key in props) {
    const val = props[key]
    if (!REG.test(key)) {
      next[key] = val
      continue
    }
    const id = '_Rfx' + sheet.cssRules.length.toString(36)
    const k = key.charAt(0)
    const style = stylers[key] || stylers[k]
    const rules = toArr(val).map((v, i) => {
      const bp = breaks[i]
      const decs = style(key, v)
      const cn = id + '_' + (bp || '')
      const body = `.${cn}{${decs}}`
      const rule = media(bp, body)
      const _key = (bp || '') + decs

      if (cache[_key]) {
        classNames.push(cache[_key])
        return null
      } else {
        classNames.push(cn)
        cache[_key] = cn
        return rule
      }
    }).filter(r => r !== null)
    sheet.insert(rules)
  }

  return [ next, classNames.join(' ') ]
}

/* todo
const createRules = (breaks, style) => (v, i) => {
      const bp = breaks[i]
      const decs = style(key, v)
      const cn = id + '_' + (bp || '')
      const body = `.${cn}{${decs}}`
      const rule = media(bp, body)

      const _key = (bp || '') + decs
      if (cache[_key]) {
        classNames.push(cache[_key])
        return null
      } else {
        classNames.push(cn)
        cache[_key] = cn
        return rule
      }
}

const createClassNames = rules => {}
*/

const dec = args => args.join(':')
const rule = args => args.join(';')
const media = (bp, body) => bp ? `@media screen and (min-width:${bp}em){${body}}` : body

const width = (key, n) => dec([ 'width', !num(n) || n > 1 ? n : (n * 100) + '%' ])

const space = (key, n) => {
  const [ a, b ] = key.split('')
  const prop = a === 'm' ? 'margin' : 'padding'
  const dirs = directions[b] || ['']
  const neg = n < 0 ? -1 : 1
  const val = !num(n) ? n : (scale[n] || n) * neg + 'px'
  return rule(dirs.map(d => dec([ prop + d, val ])))
}

const scale = [ 0, 8, 16, 32, 64 ]
const directions = {
  t: [ '-top' ],
  r: [ '-right' ],
  b: [ '-bottom' ],
  l: [ '-left' ],
  x: [ '-left', '-right' ],
  y: [ '-top', '-bottom' ],
}

const flex = (key, n) => dec([ 'display', 'flex' ])
const wrap = (key, n) => dec([ 'flex-wrap', 'wrap' ])
const column = (key, n) => dec([ 'flex-direction', 'column' ])
const align = (key, n) => dec([ 'align-items', n ])
const justify = (key, n) => dec([ 'justify-content', n ])
const order = (key, n) => dec([ 'order', n ])

const stylers = {
  w: width,
  m: space,
  p: space,
  flex,
  wrap,
  column,
  align,
  justify,
  order
}

export default css
