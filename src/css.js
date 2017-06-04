// util
const px = n => (typeof n !== 'number' || n === 0) ? n : n + 'px'
const arr = n => Array.isArray(n) ? n : [ n ]
const vals = parse => a => a.map(n => n === null ? null : parse(n))
const RFREG = /^([wmp][trblxy]?|css)$/
const num = n => typeof n === 'number' && !isNaN(n)
const width = x => n => !num(n) || n > 1 ? n : (n * 100) + '%'
const space = x => n => !num(n) ? n : (x[Math.abs(n)] || Math.abs(n)) * (n < 0 ? -1 : 1)
const dec = args => args.join(':')
const media = (bp, body) => bp ? `@media screen and (min-width:${bp}em){${body}}` : body

// constants
const parsers = {
  w: width,
  m: space,
  p: space
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

const toRules = config => obj => {
  const next = {}
  const rules = [ null, ...config.breakpoints ].map(n => [])

  for (let key in obj) {
    const val = obj[key]
    if (!RFREG.test(key)) {
      next[key] =val
      continue
    } else if (key === 'css') {
      const css = Object.keys(val).map(k => [ k, val[k] ])
      rules[0] = [ ...rules[0], ...css ]
      continue
    }

    const type = key.charAt(0)
    const d = key.charAt(1)
    const parse = parsers[type](config.space)
    const short = shorts[type]
    const direction = directions[d]
    const props = direction ? direction.map(d => short + d) : [ short ]

    vals(parse)(arr(val)).forEach((n, i) => {
      props.forEach(prop => {
        rules[i].push([ prop, px(n) ])
      })
    })
  }

  next.rules = rules

  return next
}

const toCSS = config => (selector, props) => {
  const { rules } = props
  const rulesets = []
  const breaks = [ null, ...config.breakpoints ]
  breaks.forEach((b, i) => {
    if (!rules[i].length) return
    const body = rules[i].map(dec).join(';')
    const ruleset = selector + '{' + body + '}'
    rulesets.push(media(b, ruleset))
  })

  props.css = rulesets
  delete props.rules

  return props
}

const css = config => (selector, props) => {
  const rules = toRules(config)(props)
  const styles = toCSS(config)(selector, rules)
  return styles
}

export default css
