import { GRID, NUMBERS } from 'typings'
import { shuffle } from '../../utils'

const gridTest: GRID = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
]

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * backtracking/recursive function to check all the posinnle combination of numbers until a solution is found
 * @param grid  9x9 sudoku grid
 */
function fillGrid(grid: GRID) {
  let row = 0
  let col = 0

  for (let i = 0; i < 81; i++) {
    //this allow us to inspect every element in the grid
    row = Math.floor(i / 9)
    col = i % 9

    if ((grid[row][col] = 0)) {
      //shuffle the numbers
      shuffle(numbers)
      //do stuff
      //recursive loop
      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid
