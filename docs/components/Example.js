
import React from 'react'
import toJsx from 'react-element-to-jsx-string'
import { Box } from '../..'

const Example = ({ example, ...props }) => (
  <Box mb={3} className='Example'>
    <Box p={2} children={example} />
    <pre style={{ margin: 0 }} children={toJsx(example)} />
  </Box>
)

Example.propTypes = {
  example: React.PropTypes.node
}

export default Example

