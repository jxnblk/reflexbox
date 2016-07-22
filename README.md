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
- `sm` (boolean) Sets `display: flex` only above the small breakpoint [*](#-breakpoint-props)
- `md` (boolean) Sets `display: flex` only above the medium breakpoint [*](#-breakpoint-props)
- `lg` (boolean) Sets `display: flex` only above the large breakpoint [*](#-breakpoint-props)
- `auto` (boolean) Sets `flex: 1 1 auto`

## \<Box /\>

A component that sets padding and width that works independently or as a child component of \<Flex /\>.

### Props

- `auto` (boolean) Sets `flex: 1 1 auto`
- `flex` (boolean) Sets `display: flex`
- `align` (string) Sets `align-self` property
- `order` (number) Sets `order` property
- `col` (number) Sets width and flex-basis based on a twelve column grid.
- `sm` (number) Sets width and flex-basis above the small breakpoint based on a twelve column grid. [*](#-breakpoint-props)
- `md` (number) Sets width and flex-basis above the medium breakpoint based on a twelve column grid. [*](#-breakpoint-props)
- `lg` (number) Sets width and flex-basis above the large breakpoint based on a twelve column grid. [*](#-breakpoint-props)

## Shared Props

Both \<Box /\> and \<Flex /\> accept the following props:

- `is` (element or node) Passes in a custom element or component
- `m` (number) Sets margin based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `mx` (number) Sets x-axis margin based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `my` (number) Sets y-axis margin based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `mt` (number) Sets margin-top based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `mb` (number) Sets margin-bottom based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `ml` (number) Sets margin-left based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `mr` (number) Sets margin-right based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `p` (number) Sets padding based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `px` (number) Sets x-axis padding based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `py` (number) Sets y-axis padding based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `pt` (number) Sets padding-top based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `pb` (number) Sets padding-bottom based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `pl` (number) Sets padding-left based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `pr` (number) Sets padding-right based on a scale from 0 – 4. [**](#-spacing-scale-props)
- `style` (object) Assigns styles to the component [***](#-style-and-classname-props)
- `className` (string) Adds a class to the component [***](#-style-and-classname-props)

#### * Breakpoint props

The `sm`, `md`, and `lg` props are based on the keys from the `config.breakpoints` object.
When setting custom values for breakpoints, these props will match the keys of the custom `breakpoints` object.

#### ** Spacing scale props

The values for padding and gutter props are based on the length of the `config.scale` array.
When setting custom values for the spacing scale, the values should be from 0 through the length of the array.

#### *** style and className props

The `style` and `className` props are added as a convenience and are only recommended for adding color styles.
For other layout styles, prefer using component composition over using these props.

## Configuration

Values for the spacing scale and breakpoints can be configured with
[React Context](https://facebook.github.io/react/docs/context.html).

To configure reflexbox, add `childContextTypes` and `getChildContext` to a container component.

```js
class App extends React.Component {
  static childContextTypes = {
    reflexbox: React.PropTypes.object
  }

  getChildContext () {
    return {
      reflexbox: {
        scale: [0, 10, 20, 40, 80],
        breakpoints: {
          mobile: '(min-width: 30em)',
          tablet: '(min-width: 48em)',
          desktop: '(min-width: 60em)'
        }
      }
    }
  }

  render () {
    return (
      <Flex gutter={2}>
        <Box mobile={6} tablet={3}>Box</Box>
        <Box mobile={6} tablet={3}>Box</Box>
        <Box mobile={6} tablet={3}>Box</Box>
        <Box mobile={6} tablet={3}>Box</Box>
      </Flex>
    )
  }
}
```

## Advanced Usage

### `is` prop

Change the root component of Flex or Box with the `is` prop.

```js
<Flex
  is={MyHeader}
  gutter={2}
  align='center'>
  <Box
    is='h1'
    px={2}
    auto>
    Hello
  </Box>
  <Box px={2}>
    Box
  </Box>
</Flex>
```

## Tests

Runs tests with React shallow rendering and browser tests with Karma for four different breakpoints.

```
npm test
```

[MIT License](.github/LICENSE.md)
