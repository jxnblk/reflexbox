
class Scale extends Array {
  constructor() {
    super()
    this.length = scale.length
  }
}

let scale = [
  0,
  8,
  16,
  32,
  64
]

function set (arr) {
  scale = arr
  return scale
}

export default { set, ...scale }

