
import expect from 'expect'
import config, { scale, breakpoints } from '../src/config'

describe('config', () => {
  it('should be an object', () => {
    expect(config).toBeAn('object')
  })

  it('should have a scale array', () => {
    expect(config.scale).toBeAn('array')
  })

  it('should export scale', () => {
    expect(scale).toBeAn('array')
  })

  it('should have a breakpoints array', () => {
    expect(config.breakpoints).toBeAn('object')
  })

  it('should export breakpoints', () => {
    expect(breakpoints).toBeAn('object')
  })

  it('should have default breakpoints', () => {
    expect(config.breakpoints.sm).toBeA('string')
  })
})
