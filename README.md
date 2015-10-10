# reflexbox

React flexbox layout and grid system

## Getting Started

```
npm install reflexbox
```

```js
import React from 'react'
import { Flex, Box } from 'reflexbox'

class Component extends React.Component {
  render() {
    return (
      <Box p={2}>
        <Flex center>
          <Box px={2}>Box A</Box>
          <Box px={2} fill>Box B</Box>
        </Flex>
      </Box>
    )
  }
}
```

## <Flex />

Creates a flexbox context to control layout of children.

### Props

#### `wrap` (boolean, default false)
Sets `flex-wrap: wrap`.

#### `column` (boolean, default false)
Sets `flex-direction: column`.

#### `align` (string, default null)
Sets `align-item`. Accepted values: `stretch`, `center`, `baseline`, `flex-start`, `flex-end`

#### `justify` (string, default null)
Sets `justify-content`. Accepted values: `stretch`, `center`, `baseline`, `flex-start`, `flex-end`


## <Box />

Sets padding and acts as a child component for <Flex />.

### Props

#### `fill` (boolean, default false)
Sets `flex: 1 1 auto`

#### `p` (number, default null)
Sets padding based on a scale from 0 – 4.

#### `px` (number, default null)
Sets x-axis padding based on a scale from 0 – 4.

#### `py` (number, default null)
Sets y-axis padding based on a scale from 0 – 4.

#### `pt` (number, default null)
Sets padding-top based on a scale from 0 – 4.

#### `pb` (number, default null)
Sets padding-bottom based on a scale from 0 – 4.

#### `pl` (number, default null)
Sets padding-left based on a scale from 0 – 4.

#### `pr` (number, default null)
Sets padding-right based on a scale from 0 – 4.

MIT License
