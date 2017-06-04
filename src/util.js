
export const objArr = obj => Object.keys(obj).map(key => [ key, obj[key] ])

export const arrObj = arr => arr.reduce((a, [ key, val ]) => Object.assign(a, { [key]: val }), {})

export const separate = test => ([ x = [], y = []], b) =>
  test(b)
  ? [ x, [ ...y, b ] ]
  : [ [ ...x, b ], y ]

export const toArr = n => Array.isArray(n) ? n : [ n ]

export const num = n => typeof n === 'number' && !isNaN(n)

export const flatten = (a, b) => [ ...a, ...b ]
