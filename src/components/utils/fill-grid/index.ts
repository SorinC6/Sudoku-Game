import { GRID, NUMBERS } from 'typings'
import {
  shuffle,
  isInRow,
  isInCol,
  identifySquare,
  isSquare,
} from '../../utils'

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
      for (let value of numbers) {
        //is it not in grid now
        if (!isInRow({ grid, row, value })) {
          //is it not in grid column
          if (!isInCol({ col, grid, value })) {
            // const square = [
            //   [0, 0, 0],
            //   [0, 0, 0],
            //   [0, 0, 0],
            // ]

            const square = identifySquare({ col, grid, row })
            if (!isSquare({ square, value })){
              
            }
              //is it not in grid square?
              //if all its true
              grid[row][col] = value
            //check grid if it is full, if yes stop and return true
            // otherwise run fillGrid again fillGrid(grid)
          }
        }
      }
      break
    }
  }

  grid[row][col] = 0
}

export default fillGrid
