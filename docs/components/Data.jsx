
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
      <Flex>
        <Box col={3}>
          <b>Prop</b>
        </Box>
        <Box col={2}>
          <b>Type</b>
        </Box>
        <Box col={2}>
          <b>Default</b>
        </Box>
        <Box col={5}>
          <b>Values</b>
        </Box>
      </Flex>
      {p.map((prop, i) => (
        <Flex key={i}>
          <Box col={3} children={prop.name + (prop.required ? '*' : '')} />
          <Box col={2} children={prop.type === 'enum' ? 'One of' : prop.type} />
          <Box col={2} children={prop.default} />
          <Box col={5}>
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
