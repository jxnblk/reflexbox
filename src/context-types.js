import { shape, arrayOf, number } from 'prop-types'

const contextTypes = {
  reflexbox: shape({
    breakpoints: arrayOf(number),
    space: arrayOf(number)
  })
}

export default contextTypes
