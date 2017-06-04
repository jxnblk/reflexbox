const toCSS = config => (selector, rules) => {
  const rulesets = []
  const breaks = [ null, ...config.breakpoints ]
  breaks.forEach((b, i) => {
    if (!rules[i] || !rules[i].length) return
    const body = rules[i].map(dec).join(';')
    const ruleset = selector + '{' + body + '}'
    rulesets.push(media(b, ruleset))
  })

  return rulesets
}

const dec = args => args.join(':')
const media = (bp, body) => bp ? `@media screen and (min-width:${bp}em){${body}}` : body

export default toCSS
