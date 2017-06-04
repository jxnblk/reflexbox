import {
  objArr,
  arrObj,
  separate,
} from './util'

// parse flex props
const parse = _props => {
  const [ attr, styles ] = objArr(_props)
    .reduce(separate(isFlex), [])

  const props = arrObj(attr)
  const rules = [ styles.map(createRules) ]

  return [ props, rules ]
}

const REG = /^(flex|wrap|column|align|justify|order)$/
const isFlex = ([ key, val ]) => REG.test(key)

const createRules = ([ key, val ]) => val === true
  ? bools[key]
  : [ short(key), val ]

const bools = {
  flex: [ 'display', 'flex' ],
  wrap: [ 'flex-wrap', 'wrap' ],
  column: [ 'flex-direction', 'column' ]
}

const shorts = {
  align: 'align-items',
  justify: 'justify-content'
}
const short = k => shorts[k] || k

export default parse
