import colors from './colors'
import examples from './examples'

export const setCode = code => state => ({ code })
export const setColor = color => state => ({ color })
export const setIndex = index => state => ({ index })
export const dec = state => ({ index: state.index - 1 })
export const inc = state => ({ index: state.index + 1 })

export const cycleColor = state => {
  const i = (colors.indexOf(state.color) + 1) % colors.length
  return { color: colors[i] }
}

export const toggleXRay = state => ({ xray: !state.xray })

