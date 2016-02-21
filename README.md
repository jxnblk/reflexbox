# reflexbox

React flexbox layout and grid system, built with stateless components and inline styles

[![Build Status](https://travis-ci.org/jxnblk/reflexbox.svg)](https://travis-ci.org/jxnblk/reflexbox)
[![Code Climate](https://codeclimate.com/github/jxnblk/reflexbox/badges/gpa.svg)](https://codeclimate.com/github/jxnblk/reflexbox)
[![npm version](https://badge.fury.io/js/reflexbox.svg)](https://badge.fury.io/js/reflexbox)

## Getting Started

```
npm install reflexbox
```

```js
// Example
import React from 'react'
import { Flex, Box } from 'reflexbox'

class Component extends React.Component {
  render() {
    return (
      <Box p={2}>
        <Flex align='center'>
          <Box px={2}>Box A</Box>
          <Box px={2} auto>Box B</Box>
        </Flex>
      </Box>
    )
  }
}
```

Reflexbox is composed of two React v0.14 stateless function components that can handle virtually any layout composition.

## \<Flex /\>

A component that creates a flexbox context to control layout of children.

### Props

- `wrap` (boolean, default false) Sets `flex-wrap: wrap`.
- `column` (boolean, default false) Sets `flex-direction: column`.
- `align` (string, default null) Sets `align-item`. Accepted values: `stretch`, `center`, `baseline`, `flex-start`, `flex-end`
- `justify` (string, default null) Sets `justify-content`. Accepted values: `stretch`, `center`, `baseline`, `flex-start`, `flex-end`
- `gutter` (number, default null) Sets negative left and right margins to compensate for \<Box /\> padding.
- `sm` (boolean, default false) Sets `display: flex` only above the small breakpoint
- `md` (boolean, default false) Sets `display: flex` only above the medium breakpoint
- `lg` (boolean, default false) Sets `display: flex` only above the large breakpoint
- `style` (object) Assigns styles to the component [*](#note-on-style-prop)
- `className` (string) Adds a class to the component [*](#note-on-style-prop)

## \<Box /\>

A component that sets padding and width that works independently or as a child component of \<Flex /\>.

### Props

- `auto` (boolean, default false) Sets `flex: 1 1 auto`
- `flex` (boolean, default false) Sets `display: flex`
- `p` (number, default null) Sets padding based on a scale from 0 – 4.
- `px` (number, default null) Sets x-axis padding based on a scale from 0 – 4.
- `py` (number, default null) Sets y-axis padding based on a scale from 0 – 4.
- `pt` (number, default null) Sets padding-top based on a scale from 0 – 4.
- `pb` (number, default null) Sets padding-bottom based on a scale from 0 – 4.
- `pl` (number, default null) Sets padding-left based on a scale from 0 – 4.
- `pr` (number, default null) Sets padding-right based on a scale from 0 – 4.
- `col` (number, default null) Sets width and flex-basis based on a twelve column grid.
- `sm` (number, default null) Sets width and flex-basis above the small breakpoint based on a twelve column grid.
- `md` (number, default null) Sets width and flex-basis above the medium breakpoint based on a twelve column grid.
- `lg` (number, default null) Sets width and flex-basis above the large breakpoint based on a twelve column grid.
- `style` (object) Assigns styles to the component [*](#note-on-style-prop)
- `className` (string) Adds a class to the component [*](#note-on-style-prop)

#### Note on style prop

The `style` and `className` props are added as a convenience and are only recommended for adding color styles.
For other layout styles, prefer using component composition over using these props.

## Tests

Runs React shallowRender and browser tests with Karma for four different breakpoints.

```
npm test
```

MIT License
