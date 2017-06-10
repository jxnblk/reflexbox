
# Reflexbox

Responsive React Flexbox Grid System

http://jxnblk.com/reflexbox

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

- `w` (number|string) sets width, where numbers 0-1 are percentage values, larger numbers are pixel values, and strings are raw CSS values with units.
- `flex` (boolean) sets `display: flex`
- `wrap` (boolean) sets `flex-wrap: wrap`
- `column` (boolean) sets `flex-direction: column`
- `auto` (boolean) sets `flex: 1 1 auto`
- `order` (number) sets `order`
- `align` (string) sets `align-items`
- `justify` (string) sets `justify-content`

#### Margin and Padding

Margin and padding props accept numbers `0-4` for values from the spacing scale `[ 0, 8, 16, 32, 64 ]`.
Numbers greater than 4 will be used as pixel values.
Negative values can be used for negative margins.
Strings can be passed for other CSS values, e.g. `mx='auto'`

- `m`  (number|string) margin based on a scale from 0–4.
- `mx` (number|string) x-axis margin based on a scale from 0–4.
- `my` (number|string) y-axis margin based on a scale from 0–4.
- `mt` (number|string) margin-top based on a scale from 0–4.
- `mb` (number|string) margin-bottom based on a scale from 0–4.
- `ml` (number|string) margin-left based on a scale from 0–4.
- `mr` (number|string) margin-right based on a scale from 0–4.
- `p`  (number|string) padding based on a scale from 0–4.
- `px` (number|string) x-axis padding based on a scale from 0–4.
- `py` (number|string) y-axis padding based on a scale from 0–4.
- `pt` (number|string) padding-top based on a scale from 0–4.
- `pb` (number|string) padding-bottom based on a scale from 0–4.
- `pl` (number|string) padding-left based on a scale from 0–4.
- `pr` (number|string) padding-right based on a scale from 0–4.

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

Context can be set manually or with the `<ReflexProvider />` component.


```jsx
import React from 'react'
import { ReflexProvider, Flex, Box } from 'reflexbox'

const space = [ 0, 6, 12, 18, 24 ]
const breakpoints = [ 32, 48, 64 ]

class App extends React.Component {
  render () {
    return (
      <ReflexProvider
        space={space}
        breakpoints={breakpoints}>
        <Flex mx={-2}>
          <Box w={1/4} px={2}>Box</Box>
          <Box w={1/4} px={2}>Box</Box>
          <Box w={1/4} px={2}>Box</Box>
          <Box w={1/4} px={2}>Box</Box>
        </Flex>
      </ReflexProvider>
    )
  }
}
```

## Higher Order Component

The core Reflexbox higher-order component can be used on any element that accepts `className` as a prop.

```jsx
import React from 'react'
import { reflex } from 'reflexbox'
import MyInput from './MyInput'

const FlexInput = reflex(MyInput)

const App = () => (
  <div>
    <FlexInput
      w={1/2}
      mb={2}
      defaultValue='Flex Input'
    />
  </div>
)
```

### Caveats

This currently *DOES NOT* work in Node.js server-side applications.
If you need server-side support, see version `^2.2.0` or one of the related libraries below.

---

### Related

- [Axs](http://jxnblk.com/axs)
- [Grid Styled](http://jxnblk.com/grid-styled)
- [Gx](http://jxnblk.com/gx)
- [Rebass](http://jxnblk.com/rebass)
- [Reline](http://jxnblk.com/reline)

[MIT License](.github/LICENSE.md)

