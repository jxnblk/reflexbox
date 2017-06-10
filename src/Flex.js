import { createElement } from 'react'
import Box from './Box'

const Flex = props => (
  createElement(Box, { ...props, flex: true })
)

export default Flex
