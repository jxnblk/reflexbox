import reflex from './_reflex'

const rules = [
  [ 'display', 'flex' ]
]

const css = {
  display: 'flex'
}

const Flex = reflex(css)('div')

export default Flex
