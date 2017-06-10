import React from 'react'

// const color = '#0eb'
const color = '#07c'

const Card = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      padding: 64,
      fontFamily: '-apple-system',
      fontWeight: 'bold',
      fontSize: 48,
      textTransform: 'uppercase',
      letterSpacing: '.3em',
      WebkitFontSmoothing: 'antialiased',
      width: 768,
      height: 576,
      color: '#fff',
      backgroundColor: color
    }}
  >
    <div
      style={{
        display: 'flex',
        width: '100%',
        mixBlendMode: 'screen',
        opacity: 3/4,
        boxShadow: 'inset 0 0 0 3px'
      }}>
      <div
        style={{
          padding: 32,
          color: '#000',
          backgroundColor: '#fff',
        }}>
        Reflex
      </div>
      <div style={{ padding: 32 }}>
        Box
      </div>
    </div>
  </div>
)

export default Card
