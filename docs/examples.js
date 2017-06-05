
const hero = {
  name: 'Reflexbox',
  code: `<Flex
  p={[ 3, null, 4 ]}
  align='center'
  style={{
    height: '100%',
    color: '#fff',
    backgroundColor: color
  }}>
  <Box>
    <Flex
      style={{
        textTransform: 'uppercase',
        letterSpacing: '.3em',
        borderWidth: 4,
        borderStyle: 'solid',
      }}>
      <Box p={2}
        style={{
          color: color,
          backgroundColor: '#fff'
        }}>
        <h1 style={{ margin: 0 }}>Reflex</h1>
      </Box>
      <Box p={2}>
        <h1 style={{ margin: 0 }}>Box</h1>
      </Box>
    </Flex>
    <Axs.Text
      my3
      bold
      f={3}
      children='Responsive React Flexbox Grid System'
    />
    <Flex align='center'>
      <Axs.Button
        is='a'
        mr2
        href='https://github.com/jxnblk/reflexbox'
        children='GitHub'
        css={{
          color: color,
          backgroundColor: '#fff'
        }}
      />
      <Axs.Pre
        children='npm i reflexbox'
      />
    </Flex>
  </Box>
</Flex>`
}

const flexAuto = {
  name: 'Flex Auto',
  code: `<Flex
  align='center'
  px={3}
  py={4}
  style={{
    height: '100%',
    color: '#fff',
    backgroundColor: color
  }}>
  <Box p={3} auto>Auto</Box>
  <Box p={3} auto>Auto</Box>
  <Box p={3} auto>Auto</Box>
</Flex>`
}

const padding = {
  name: 'Padding',
  code: `<Flex
  align='center'
  justify='space-around'
  p={3}
  style={{
    height: '100%',
    color: '#fff',
    backgroundColor: color
  }}>
  <Box p={4}>p1</Box>
  <Box p={3}>p1</Box>
  <Box p={2}>p1</Box>
  <Box p={1}>p1</Box>
</Flex>`
}

const align = {
  name: 'Align',
  code: `<Flex
  align='center'
  justify='space-around'
  p={3}
  style={{
    height: '100%',
    color: '#fff',
    backgroundColor: color
  }}>
  <Box p={4}>
    <Axs.Text f={0}>Align</Axs.Text>
  </Box>
  <Box p={2}>
    <Axs.Text f={6}>Align</Axs.Text>
  </Box>
</Flex>`
}
const _template = {
  name: 'Padding',
  code: `<Flex
  align='center'
  p={3}
  style={{
    height: '100%',
    color: '#fff',
    backgroundColor: color
  }}>
</Flex>`
}

const examples = [
  hero,
  flexAuto,
  padding,
  align,
]

export default examples
