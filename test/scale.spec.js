
import { expect } from 'chai'
import { scale } from '../src'

describe('scale', () => {

  it('should be an array', () => {
    expect(scale).to.be.an('array')
  })

  it('should have a length of 5', () => {
    expect(scale).to.have.length(5)
  })

})

