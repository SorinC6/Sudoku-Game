import shuffle from './index'

describe('shuffle function', () => {
  it('returns an array with the same length', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toHaveLength(3)
  })

  it('it returns an array with the same elements after shuffle', () => {
    const array = [1, 2, 3]
    shuffle(array)
    expect(array).toContain(1)
    expect(array).toContain(2)
    expect(array).toContain(3)
  })
})
