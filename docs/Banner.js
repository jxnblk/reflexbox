import React from 'react'
import { connect } from 'funcup'
import Axs from 'axs'
import {
  Button,
  Pre,
  Text
} from 'axs'
import { Flex, Box } from 'reflexbox'
import XRay from 'react-x-ray'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { setCode } from './updaters'


class ExampleBanner extends React.Component {
  update = code => {
    this.props.update(setCode(code))
  }

  render () {
    const {
      example,
      color,
      xray
    } = this.props

    const scope = {
      Flex,
      Box,
      color,
      Axs,
    }

    const sx = {
      root: {
        position: 'relative',
      },
      inner: {
        minHeight: '100vh'
      },
      top: {
        height: '70vh',
        backgroundColor: '#444'
      },
      bottom: {
        height: '50vh'
      },
      preview: {
        height: '70vh',
        minHeight: 512,
        overflow: 'auto'
      },
      editor: {
        fontFamily: 'SF Mono, Menlo, monospace',
        fontSize: 12,
        padding: 16,
        height: '100%',
        overflow: 'auto',
        margin: 0,
        color: color,
        backgroundColor: '#000',
        outline: 'none'
      },
      error: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        fontFamily: 'SF Mono, Menlo, monospace',
        fontSize: 12,
        margin: 0,
        padding: 16,
        color: '#eee',
        backgroundColor: '#f00'
      },
    }

    return (
      <Box style={sx.root}>
        <LiveProvider
          scope={scope}
          code={example.code}
          mountStylesheet={false}>
          <LiveError style={sx.error} />
          <Flex column style={sx.inner}>
            <Box auto style={sx.top}>
              <XRay
                color={color}
                backgroundColor='#eee'
                disabled={!xray}>
                <LivePreview style={sx.preview} />
              </XRay>
            </Box>
            <Box auto style={sx.bottom}>
              <LiveEditor style={sx.editor} />
            </Box>
          </Flex>
        </LiveProvider>
      </Box>
    )
  }
}

export default connect()(ExampleBanner)
