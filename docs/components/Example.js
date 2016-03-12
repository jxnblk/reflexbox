
import React from 'react'
import toJsx from 'react-element-to-jsx-string'

const Example = ({ example, ...props }) => (
  <div className='Example mb3 border border-light-blue rounded'>
    <div className='p2' children={example} />
    <pre children={toJsx(example)}
      className='m0 p2 overflow-scroll border-top border-light-blue' />
  </div>
)

Example.propTypes = {
  example: React.PropTypes.node
}

export default Example

