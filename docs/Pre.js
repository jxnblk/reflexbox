import React from 'react'

const Pre = props => (
  <pre
    {...props}
    style={{
      fontFamily: '"SF Mono", Menlo, monospace',
      fontSize: 14,
      overflow: 'auto',
      margin: 0
    }}
  />
)

export default Pre
