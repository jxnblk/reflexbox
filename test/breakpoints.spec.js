
import { expect } from 'chai'
import { breakpoints } from '../src'

describe('breakpoints', () => {
  it('should be an object', () => {
    expect(breakpoints).to.be.an('object')
  })

  it('should have 3 keys', () => {
    expect(Object.keys(breakpoints).length).to.equal(3)
  })
})
