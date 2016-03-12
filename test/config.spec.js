
import { expect } from 'chai'
import config, { scale, breakpoints } from '../src/config'

describe('config', () => {
  it('should be an object', () => {
    expect(config).to.be.an('object')
  })

  it('should have a scale array', () => {
    expect(config.scale).to.be.an('array')
  })

  it('should export scale', () => {
    expect(scale).to.be.an('array')
  })

  it('should have a breakpoints array', () => {
    expect(config.breakpoints).to.be.an('object')
  })

  it('should export breakpoints', () => {
    expect(breakpoints).to.be.an('object')
  })

  it('should have default breakpoints', () => {
    expect(config.breakpoints.sm).to.be.a('string')
  })
})
