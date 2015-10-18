
import Color from 'color'

export const x = [
  0,
  8,
  16,
  32,
  48,
  64
]

export const h = [
  48,
  32,
  24,
  20,
  16,
  14,
  12
]

function rgba(hex, alpha = 0.9) {
  return Color(hex).alpha(alpha).rgbString()
}

export const black = '#111'
export const white = '#fff'

export const blue = rgba('#0c4fde')
export const navy = rgba('#091039')
export const aqua = rgba('#18cddb')
export const green = rgba('#00b626')
export const orange = rgba('#fe7f48')
export const yellow = rgba('#effc58')
export const pink = rgba('#fd3682')
export const purple = rgba('#de80f0')
export const red = rgba('#f90832')

export const colors = {
  black,
  white,
  blue,
  navy,
  aqua,
  green,
  orange,
  yellow,
  pink,
  purple,
  red,
}

export default { x, h, colors }

