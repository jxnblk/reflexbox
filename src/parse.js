import css from './css'

const parse = config => _props => {
  const [ next, className ] = css(config)(_props)
  next.className = className

  return next
}

export default parse
