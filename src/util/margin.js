
const n = (key, x, s) => typeof x === 'number' ? { [key]: s[x] } : null

function margin (props, scale) {
  scale = scale || []
  const {
    m,
    mx,
    my,
    mt,
    mr,
    mb,
    ml
  } = props || {}

  const result = Object.assign({},
    n('margin', m, scale),
    n('marginTop', mt, scale),
    n('marginBottom', mb, scale),
    n('marginTop', my, scale),
    n('marginBottom', my, scale),
    n('marginLeft', ml, scale),
    n('marginRight', mr, scale),
    n('marginLeft', mx, scale),
    n('marginRight', mx, scale)
  )

  return result
}

export default margin

