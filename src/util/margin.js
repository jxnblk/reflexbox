
import assign from 'object-assign'

const a = (x) => (key) => x === 'auto' ? { [key]: 'auto' } : null

const n = (key, x, s, multiplier) => typeof s[x] === 'number' ? { [key]: s[x] * (multiplier || 1) } : a(x)(key)

function margin (props, scale) {
  scale = scale || []
  const {
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml,
    gutter
  } = props || {}

  const result = assign({},
    n('margin', m, scale),
    n('marginTop', mt, scale),
    n('marginBottom', mb, scale),
    n('marginTop', my, scale),
    n('marginBottom', my, scale),
    n('marginLeft', ml, scale),
    n('marginRight', mr, scale),
    n('marginLeft', mx, scale),
    n('marginRight', mx, scale),

    n('marginLeft', gutter, scale, -1),
    n('marginRight', gutter, scale, -1),
  )

  return result
}

export default margin

