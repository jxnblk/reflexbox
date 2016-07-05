
import React from 'react'
import Table from './Table'
import FlexDemo from './FlexDemo'
import BoxDemo from './BoxDemo'

class ComponentDocs extends React.Component {

  render () {
    const { name, docs } = this.props

    const headers = [
      'Prop',
      'Type',
      'Description'
    ]

    const data = Object.keys(docs.props)
      .map(key => {
        const prop = docs.props[key]
        const oneOfValues = prop.type.value && Array.isArray(prop.type.value) ? `[${prop.type.value.map(v => v.value).join(', ')}]` : prop.type.value
        return [
          key + (prop.required ? '*' : ''),
          prop.type.name === 'enum' ? `oneOf(${oneOfValues})` : prop.type.name,
          // prop.defaultValue ? prop.defaultValue.value : 'null',
          prop.description
        ]
      })

    return (
      <section id={name} className='v100 p3'>
        {name === 'Flex' && <FlexDemo />}
        {name === 'Box' && <BoxDemo />}
        <h2>
          <a href={`#${name}`}
            style={{
              color: 'inherit',
              textDecoration: 'none'
            }}>
            {`<${name} />`}
          </a>
        </h2>
        <p>{docs.description}</p>
        <Table
          headers={headers}
          data={data} />
      </section>
    )
  }
}

export default ComponentDocs

