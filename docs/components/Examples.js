
import React from 'react'
import Example from './Example'

const Examples = ({ examples, ...props }) => (
  <section id='examples' className='p4'>
    <h2>
      <a href='#examples'
        style={{
          color: 'inherit',
          textDecoration: 'none'
        }}>
        Examples
      </a>
    </h2>
    {examples.map((e, i) => (
      <Example key={i} example={e} />
    ))}
  </section>
)

export default Examples

