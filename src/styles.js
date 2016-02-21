
import breakpoints from './breakpoints'
import scale from './scale'

class Styles {
  constructor (init) {
    Object.assign(this, init)
  }

  set (obj) {
    if (typeof obj !== 'object') {
      return false
    }
    Object.assign(this, obj)
  }

  get(key) {
    return this[key]
  }

  setScale (scale) {
    this.set({ scale })
  }

  setBreakpoints (breakpoints) {
    this.set({ breakpoints })
  }

  reset () {
    this.set({ breakpoints, scale })
  }
}

const createStyles = () => new Styles({ breakpoints, scale })
let styles = createStyles()

export default styles
