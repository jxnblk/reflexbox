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

- `wrap` (boolean) Sets `flex-wrap: wrap`.
- `column` (boolean) Sets `flex-direction: column`.
- `align` (string) Sets `align-item`. Accepted values: `stretch`, `center`, `baseline`, `flex-start`, `flex-end`
- `justify` (string) Sets `justify-content`. Accepted values: `center`, `space-around`, `space-between`, `flex-start`, `flex-end`
- `gutter` (number) Sets negative left and right margins to compensate for \<Box /\> padding.
- `sm` (boolean) Sets `display: flex` only above the small breakpoint [*](breakpoint-props)
- `md` (boolean) Sets `display: flex` only above the medium breakpoint [*](breakpoint-props)
- `lg` (boolean) Sets `display: flex` only above the large breakpoint [*](breakpoint-props)
- `auto` (boolean) Sets `flex: 1 1 auto`
- `style` (object) Assigns styles to the component [***](#style-and-classname-props)
- `className` (string) Adds a class to the component [***](#style-and-classname-props)

## \<Box /\>

A component that sets padding and width that works independently or as a child component of \<Flex /\>.

### Props

- `auto` (boolean) Sets `flex: 1 1 auto`
- `flex` (boolean) Sets `display: flex`
- `p` (number) Sets padding based on a scale from 0 – 4. [**](spacing-scale-props)
- `px` (number) Sets x-axis padding based on a scale from 0 – 4. [**](spacing-scale-props)
- `py` (number) Sets y-axis padding based on a scale from 0 – 4. [**](spacing-scale-props)
- `pt` (number) Sets padding-top based on a scale from 0 – 4. [**](spacing-scale-props)
- `pb` (number) Sets padding-bottom based on a scale from 0 – 4. [**](spacing-scale-props)
- `pl` (number) Sets padding-left based on a scale from 0 – 4. [**](spacing-scale-props)
- `pr` (number) Sets padding-right based on a scale from 0 – 4. [**](spacing-scale-props)
- `col` (number) Sets width and flex-basis based on a twelve column grid.
- `sm` (number) Sets width and flex-basis above the small breakpoint based on a twelve column grid. [*](breakpoint-props)
- `md` (number) Sets width and flex-basis above the medium breakpoint based on a twelve column grid. [*](breakpoint-props)
- `lg` (number) Sets width and flex-basis above the large breakpoint based on a twelve column grid. [*](breakpoint-props)
- `style` (object) Assigns styles to the component [***](#style-and-classname-props)
- `className` (string) Adds a class to the component [***](#style-and-classname-props)


#### * Breakpoint props

The `sm`, `md`, and `lg` props are based on the keys from the `styles.breakpoints` object. When setting custom values for breakpoints, these props will match the keys of the custom `breakpoints` object.

#### ** Spacing scale props

The values for padding and gutter props are based on the length of the `styles.scale` array.
When setting custom values for the spacing scale, the values should be from 0 through the length of the array.

#### *** style and className props

The `style` and `className` props are added as a convenience and are only recommended for adding color styles.
For other layout styles, prefer using component composition over using these props.

## Configuration

The Flex and Box components use an instance of the `Styles` class in [`src/styles.js`](src/styles.js) to determine breakpoints and spacing scales.

To set custom breakpoints, configure the styles instance with the `setBreakpoints` method.

```js
import { styles } from 'reflexbox'
styles.setBreakpoints({
  sm: '(min-width: 36em)',
  lg: '(min-eidth: 60em)'
})
```

To set a custom spacing scale, use the `setScale` method.

```js
import { styles } from 'reflexbox'
styles.setScale([0, 6, 12, 24, 48])
```

## Tests

Runs React shallowRender and browser tests with Karma for four different breakpoints.

```
npm test
```

MIT License
