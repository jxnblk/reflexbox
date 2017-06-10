<Flex p={[ 3, null, 4 ]} align='center'>
  <Box>
    <Border
      mt={4}
      style={{
        textTransform: 'uppercase',
        letterSpacing: '.3em',
      }}>
      <Flex>
        <Fill p={2}
          className='slide'
          color={color}>
          <h1 style={{ margin: 0 }}>Reflex</h1>
        </Fill>
        <Box p={2}>
          <h1 style={{ margin: 0 }}>Box</h1>
        </Box>
      </Flex>
    </Border>
    <Box my={2}>
      <Text f={3}
        children='Responsive React Flexbox Grid System'
      />
    </Box>
    <Flex mb={4} align='center'>
      <Btn
        href='https://github.com/jxnblk/reflexbox'
        children='GitHub'
        style={{
          color: '#fff',
          backgroundColor: 'rgba(0, 0, 0, .75)',
          borderRadius: 6,
          mixBlendMode: 'multiply'
        }}
      />
      <Box ml='auto' />
      <Pre children='npm i reflexbox' />
    </Flex>
  </Box>
</Flex>
