<Flex
  p={[ 3, null, 4 ]}
  align='center'
  style={{
    height: '100%',
  }}>
  <Box>
    <Border
      style={{
        textTransform: 'uppercase',
        letterSpacing: '.3em',
      }}>
      <Flex>
        <Fill p={2} color={color}>
          <h1 style={{ margin: 0 }}>Reflex</h1>
        </Fill>
        <Box p={2}>
          <h1 style={{ margin: 0 }}>Box</h1>
        </Box>
      </Flex>
    </Border>
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
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, .75)',
          mixBlendMode: 'multiply'
        }}
      />
      <Axs.Pre
        children='npm i reflexbox'
      />
    </Flex>
  </Box>
</Flex>
