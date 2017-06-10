import React from 'react'
import { connect } from 'funcup'
import { Flex, Box } from 'reflexbox'
import XRay from 'react-x-ray'
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'
import { dark } from './colors'
import Fill from './Fill'
import Border from './Border'
import Btn from './Btn'
import Text from './Text'
import Pre from './Pre'
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
      Border,
      Fill,
      Btn,
      Text,
      Pre,
      color,
    }

    const textColor = dark(color) ? '#fff' : '#000'

    const sx = {
      root: {
        position: 'relative',
      },
      inner: {
        minHeight: '100vh'
      },
      top: {
        position: 'relative',
        height: '80vh',
        fontWeight: 'bold',
        color: textColor,
        backgroundColor: color,
        transitionProperty: 'background-color',
        transitionDuration: '.5s',
        transitionTimingFunction: 'ease-out',
        overflow: 'hidden'
      },
      bottom: {
        height: '50vh'
      },
      preview: {
        display: 'flex',
        alignItems: 'center',
        height: '80vh',
        paddingTop: 64,
        paddingBottom: 64,
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
        color: '#fff',
        backgroundColor: '#f00'
      },
      credits: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        marginRight: 16
      }
    }

    return (
      <Box style={sx.root}>
        <LiveProvider
          scope={scope}
          code={example}
          mountStylesheet={false}>
          <LiveError style={sx.error} />
          <Flex column style={sx.inner}>
            <Box auto style={sx.top}>
              <XRay
                color={textColor}
                backgroundColor={color}
                disabled={!xray}>
                <LivePreview
                  style={sx.preview}
                />
              </XRay>
              <Btn
                style={sx.credits}
                href='http://jxnblk.com'
                children='Made by Jxnblk'
              />
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
