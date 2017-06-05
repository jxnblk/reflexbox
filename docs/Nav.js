import React from 'react'
import { connect } from 'funcup'
import { Flex, Box } from 'reflexbox'
import {
  Text
} from 'axs'
import {
  inc,
  dec,
  toggleXRay,
  cycleColor
} from './updaters'

const Nav = props => {
  const sx = {
    root: {
      position: 'fixed',
      zIndex: 2,
      top: 0,
      right: 0,
      left: 0,
      color: '#fff'
    }
  }

  return (
    <nav style={sx.root}>
      <Flex py={1} align='baseline'>
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
          <Text is='a'
            bold
            f={6}
            css={{
              color: 'inherit',
              textTransform: 'uppercase',
              letterSpacing: '.2em',
              textDecoration: 'none',
              ':hover': {
                textDecoration: 'underline',
              }
            }}
            href='https://github.com/jxnblk/reflexbox'
            children='GitHub'
          />
        </Box>
        <Box px={2} ml='auto'>
          <button
            onClick={e => props.update(toggleXRay)}
            children='X-Ray'
          />
          <button
            onClick={e => props.update(cycleColor)}
            children='Color'
          />
          <button
            onClick={e => props.update(dec)}
            children='Previouw'
          />
          <button
            onClick={e => props.update(inc)}
            children='Next'
          />
        </Box>
      </Flex>
    </nav>
  )
}

export default connect()(Nav)
