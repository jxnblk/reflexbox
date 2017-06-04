import sheet from './sheet'
import space from './space'
import css from './css'

const parse = config => _props => {
  const id = sheet.cssRules.length.toString(36)
  const cn = '_reflex' + id
  const sl = '.' + cn

  const [ next, spacing ] = space(_props)
  const cssRules = css(config)(sl, spacing)

  next.className = cn
  sheet.insert(cssRules)

  return next
}

export default parse
