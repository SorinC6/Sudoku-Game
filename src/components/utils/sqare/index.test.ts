import { SQUARE } from 'typings'
import isInSquare from './index'

describe('isInSqare functions', () => {
  it('return true when value is in sqare', () => {
    const square: SQUARE = [
      [1, 2, 4],
      [8, 2, 7],
      [6, 9, 5],
    ]
    expect(isInSquare({ square, value: 1 })).toBeTruthy()
  })
  it('return false when value is not in sqare', () => {
    const square: SQUARE = [
      [0, 2, 4],
      [8, 2, 7],
      [6, 9, 5],
    ]
    expect(isInSquare({ square, value: 1 })).toBeFalsy()
  })
})
