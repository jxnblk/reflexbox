
# Reflexbox

Responsive React Flexbox Grid System

[![Build Status](https://travis-ci.org/jxnblk/reflexbox.svg?branch=master)](https://travis-ci.org/jxnblk/reflexbox)
[![npm version](https://badge.fury.io/js/reflexbox.svg)](https://badge.fury.io/js/reflexbox)


## Features

- Simple API for quickly controlling layout
- Helps promote composability and separation of concerns
- CSS-in-JS built in - no external dependencies
- Only generates the CSS needed to render

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
      <Flex p={2} align='center'>
        <Box px={2} w={1/2}>Box A</Box>
        <Box px={2} w={1/2}>Box B</Box>
      </Flex>
    )
  }
}
```

## API

### `<Flex />`

Component primitive with `display: flex`

### `<Box />`

Primitive for controlling width, margin, padding and more.

### Props

Both `<Flex />` and `<Box />` share the same props.

- `w` (number) Sets width - either a fraction pixel value
- `flex` (boolean) Sets `display: flex`
- `wrap` (boolean) Sets `flex-wrap: wrap`
- `column` (boolean) Sets `flex-direction: column`
- `auto` (boolean) Sets `flex: 1 1 auto`
- `order` (boolean) Sets `order`
- `align` (string) Sets `align-items`
- `justify` (string) Sets `justify-content`

- `m`  (number) Sets margin based on a scale from 0–4.
- `mx` (number) Sets x-axis margin based on a scale from 0–4.
- `my` (number) Sets y-axis margin based on a scale from 0–4.
- `mt` (number) Sets margin-top based on a scale from 0–4.
- `mb` (number) Sets margin-bottom based on a scale from 0–4.
- `ml` (number) Sets margin-left based on a scale from 0–4.
- `mr` (number) Sets margin-right based on a scale from 0–4.
- `p`  (number) Sets padding based on a scale from 0–4.
- `px` (number) Sets x-axis padding based on a scale from 0–4.
- `py` (number) Sets y-axis padding based on a scale from 0–4.
- `pt` (number) Sets padding-top based on a scale from 0–4.
- `pb` (number) Sets padding-bottom based on a scale from 0–4.
- `pl` (number) Sets padding-left based on a scale from 0–4.
- `pr` (number) Sets padding-right based on a scale from 0–4.

### Responsive Array Prop Values

All props accept arrays as values for mobile-first responsive styles.

```js
// Set widths for different breakpoints, starting from smallest to largest
// This example will be 100% width below the smallest breakpoint,
// then 50% and 25% for the next two breakpoints respectively
<Box w={[ 1, 1/2, 1/4 ]} />
```

Null values can be passed to the array to skip a breakpoint.

```js
<Box w={[ 1, null, 1/2 ]} />
```


## Configuration

Values for the breakpoints and space scale can be configured with
[React Context](https://facebook.github.io/react/docs/context.html).

To configure reflexbox, add `childContextTypes` and `getChildContext` to a container component.

```jsx
import React from 'react'
import PropTypes from 'prop-types'

class App extends React.Component {
  static childContextTypes = {
    reflexbox: PropTypes.object
  }

  getChildContext () {
    return {
      reflexbox: {
        // breakpoints are converted to min-width em-based media queries
        breakpoints: [
          32, 48, 64
        ],
        space: [
          0, 6, 12, 18, 24, 30
        ]
      }
    }
  }

  render () {
    return (
      <Flex mx={-2}>
        <Box w={1/4} px={2}>Box</Box>
        <Box w={1/4} px={2}>Box</Box>
        <Box w={1/4} px={2}>Box</Box>
        <Box w={1/4} px={2}>Box</Box>
      </Flex>
    )
  }
}
```

---

### Related

- [Axs](http://jxnblk.com/axs)
- [Gx](http://jxnblk.com/gx)
- [Grid Styled](http://jxnblk.com/grid-styled)
- [Rebass](http://jxnblk.com/rebass)
- [Reline](http://jxnblk.com/reline)

[MIT License](.github/LICENSE.md)

