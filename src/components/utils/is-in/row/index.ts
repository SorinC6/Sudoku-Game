import { GRID, NUMBERS } from 'typings'

interface IInput {
  grid: GRID
  row: number
  value: NUMBERS
}

//return true if the value is already used in current grid row
function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value)
}

export default isInRow
