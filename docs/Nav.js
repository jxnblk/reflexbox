import React from 'react'
import { connect } from 'funcup'
import { Flex, Box } from 'reflexbox'
import { Text } from 'axs'
import { Arrow } from 'reline'
import {
  inc,
  dec,
  toggleXRay,
  cycleColor
} from './updaters'
import Button from './Button'
import Btn from './Btn'

const Nav = props => {
  const sx = {
    root: {
      position: 'fixed',
      zIndex: 2,
      top: 0,
      right: 0,
      left: 0,
      color: '#fff',
      backgroundColor: 'rgba(0, 0, 0, .75)',
      mixBlendMode: 'multiply'
    }
  }

  return (
    <nav style={sx.root}>
      <Flex py={1} align='center'>
        <Box px={2}>
          <Text
            bold
            f={6}
            css={{
              textTransform: 'uppercase',
              letterSpacing: '.2em'
            }}>
            Reflexbox
          </Text>
        </Box>
        <Box px={2}>
          <Btn
            href='https://github.com/jxnblk/reflexbox'
            children='GitHub'
          />
        </Box>
        <Box ml='auto' />
        <Button
          onClick={e => props.update(toggleXRay)}
          children='X-Ray'
        />
        <Button
          onClick={e => props.update(cycleColor)}
          children='Color'
        />
        <Button onClick={e => props.update(dec)}>
          <Arrow left />
        </Button>
        <Button onClick={e => props.update(inc)}>
          <Arrow right />
        </Button>
      </Flex>
    </nav>
  )
}

export default connect()(Nav)
