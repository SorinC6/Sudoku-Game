import React, { FC, Children } from 'react'

const Grid: FC = () => {
  return (
    <div className="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, idxRow) => {
          return (
            <div className="grid-row-container">
              {Children.toArray(
                [...Array(9)].map((_, idxBlock) => {
                  return <div className="block"></div>
                })
              )}
            </div>
          )
        })
      )}
    </div>
  )
}

export default Grid
