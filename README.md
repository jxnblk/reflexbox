
# Reflexbox

React flexbox grid system higher order component

[![Build Status](https://travis-ci.org/jxnblk/reflexbox.svg?branch=master)](https://travis-ci.org/jxnblk/reflexbox)
[![Code Climate](https://codeclimate.com/github/jxnblk/reflexbox/badges/gpa.svg)](https://codeclimate.com/github/jxnblk/reflexbox)
[![npm version](https://badge.fury.io/js/reflexbox.svg)](https://badge.fury.io/js/reflexbox)

## Getting Started

```
npm install reflexbox
```

```js
// Higher order component example
import React from 'react'
import { Reflex } from 'reflexbox'

const Button = (props) => {
  return <button {...props} />
}

export default Reflex(MyButton)
```

```js
// Basic component example
import React from 'react'
import { Flex, Box } from 'reflexbox'

class Component extends React.Component {
  render() {
    return (
      <Flex p={2} align='center'>
        <Box px={2}>Box A</Box>
        <Box px={2} auto>Box B</Box>
      </Flex>
    )
  }
}
```

## API

Reflexbox is composed of a higher order component and two React components that can handle virtually any layout composition.

## Reflex

Higher order component that accepts style helper props and is used to create the Flex and Box components.
The Flex and Box components are mostly provided as a convenience and to ensure backwards compatibility.

### Props

Components wrapped with the Reflex higher order component
and both \<Box /\> and \<Flex /\> accept several layout props from
the [Robox](https://github.com/jxnblk/robox) higher order component.

- `m` (number) Sets margin based on a scale from 0 – 6.
- `mx` (number) Sets x-axis margin based on a scale from 0 – 6.
- `my` (number) Sets y-axis margin based on a scale from 0 – 6.
- `mt` (number) Sets margin-top based on a scale from 0 – 6.
- `mb` (number) Sets margin-bottom based on a scale from 0 – 6.
- `ml` (number) Sets margin-left based on a scale from 0 – 6.
- `mr` (number) Sets margin-right based on a scale from 0 – 6.
- `p` (number) Sets padding based on a scale from 0 – 6.
- `px` (number) Sets x-axis padding based on a scale from 0 – 6.
- `py` (number) Sets y-axis padding based on a scale from 0 – 6.
- `pt` (number) Sets padding-top based on a scale from 0 – 6.
- `pb` (number) Sets padding-bottom based on a scale from 0 – 6.
- `pl` (number) Sets padding-left based on a scale from 0 – 6.
- `pr` (number) Sets padding-right based on a scale from 0 – 6.

## \<Flex /\>

A component that sets display flex to control layout of children.

### Props

- `wrap` (boolean) Sets `flex-wrap: wrap`.
- `column` (boolean) Sets `flex-direction: column`.
- `align` (string) Sets `align-item`. Accepted values: `stretch`, `center`, `baseline`, `flex-start`, `flex-end`
- `justify` (string) Sets `justify-content`. Accepted values: `center`, `space-around`, `space-between`, `flex-start`, `flex-end`
- `gutter` (number) Sets negative left and right margins to compensate for \<Box /\> padding.
- `auto` (boolean) Sets `flex: 1 1 auto`

## \<Box /\>

A component that sets padding and width that works independently or as a child component of \<Flex /\>.

### Props

- `auto` (boolean) Sets `flex: 1 1 auto`
- `flex` (boolean) Sets `display: flex`
- `align` (string) Sets `align-self` property
- `order` (number) Sets `order` property
- `col` (number) Sets width and flex-basis based on a twelve column grid.
- `sm` (number) Sets width and flex-basis above the small breakpoint based on a twelve column grid.
- `md` (number) Sets width and flex-basis above the medium breakpoint based on a twelve column grid.
- `lg` (number) Sets width and flex-basis above the large breakpoint based on a twelve column grid.

## Configuration

Values for the breakpoints can be configured with
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
        breakpoints: {
          sm: '(min-width: 30em)',
          md: '(min-width: 48em)',
          lg: '(min-width: 60em)'
        }
      }
    }
  }

  render () {
    return (
      <Flex gutter={2}>
        <Box sm={6} md={3}>Box</Box>
        <Box sm={6} md={3}>Box</Box>
        <Box sm={6} md={3}>Box</Box>
        <Box sm={6} md={3}>Box</Box>
      </Flex>
    )
  }
}
```

[MIT License](.github/LICENSE.md)

