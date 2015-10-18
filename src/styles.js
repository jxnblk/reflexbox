
import breakpoints from './breakpoints'
import scale from './scale'

class Styles {
  constructor () {
    this.scale = scale
    this.breakpoints = breakpoints
  }

  setScale (arr) {
    this.scale = arr
  }

  setBreakpoints (obj) {
    this.breakpoints = obj
  }

  reset () {
    this.breakpoints = breakpoints
    this.scale = scale
  }
}

let styles = styles || new Styles

export default styles
