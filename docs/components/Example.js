
import React from 'react'
// import toJsx from 'react-to-jsx'
import toJsx from 'react-element-to-jsx-string'

const Example = ({ example, ...props }) => (
  <div className='Example mb3 border rounded'>
    <div className='p2' children={example} />
    <pre children={toJsx(example)}
      style={{ maxHeight: 256 }}
      className='m0 p2 overflow-scroll border-top' />
  </div>
)

Example.propTypes = {
  example: React.PropTypes.node
}

export default Example

