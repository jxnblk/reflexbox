import sheet from './sheet'
import css from './css'

const cx = config => props => {
  const id = sheet.cssRules.length.toString(36)
  const cn = '_reflex' + id
  const sl = '.' + cn
  const next = css(config)(sl, props)

  if (next.css.length) {
    next.className = cn
    sheet.insert(next.css)
  }
  delete next.css

  return next
}

export default cx
