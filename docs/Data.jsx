
import React from 'react'
import { Flex, Box } from '../src'

const Data = ({ props, ...other }) => {
  console.log(props, other)

  const p = Object.keys(props).map((key) => {
    const prop = props[key]
    return {
      name: key,
      required: prop.required,
      type: prop.type.name,
      value: prop.type.value || null,
      default: prop.defaultValue ? prop.defaultValue.value : null
    }
  })

  return (
    <Box>
      <h4>Props</h4>
      {p.map((prop, i) => (
        <Flex key={i}>
          <Box px={2} children={prop.name + (prop.required ? '*' : '')} />
          <Box px={2} children={prop.type} />
          <Box px={2} children={prop.default} />
          <Box px={2}>
            <code>
              {prop.value && prop.value.map((val) => val.value).join()}
            </code>
          </Box>
        </Flex>
      ))}
    </Box>
  )
}

export default Data
