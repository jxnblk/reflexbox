import sheet from './sheet'
import space from './space'
import flex from './flex-props'
import css from './css'

const parse = config => _props => {
  const id = sheet.cssRules.length.toString(36)
  const cn = '_reflex' + id
  const sl = '.' + cn

  const [ a, styles ] = space(_props)
  const [ next, flexRules ] = flex(a)

  const rules = css(config)(sl, styles)
  const rulesB = css(config)(sl, flexRules)

  sheet.insert(rules)
  sheet.insert(rulesB)

  next.className = cn

  return next
}

export default parse
