
import assign from 'object-assign'

const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null

function padding (props, scale) {
  scale = scale || []
  const {
    p,
    px,
    py,
    pt,
    pr,
    pb,
    pl
  } = props || {}

  const result = assign({},
    n('padding', p, scale),
    n('paddingTop', pt, scale),
    n('paddingBottom', pb, scale),
    n('paddingTop', py, scale),
    n('paddingBottom', py, scale),
    n('paddingLeft', pl, scale),
    n('paddingRight', pr, scale),
    n('paddingLeft', px, scale),
    n('paddingRight', px, scale)
  )

  return result
}

export default padding

