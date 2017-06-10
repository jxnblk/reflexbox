import chroma from 'chroma-js'

export const dark = n => chroma(n).luminance() < 0.5

const colors = [
  '#07c',
  '#50c',
  '#b0c',
  '#0eb',
  '#eb0',
  '#e07',
]

export default colors
