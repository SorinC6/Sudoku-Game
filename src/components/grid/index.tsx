import React, { FC, Children } from 'react'
import { Container, Row } from './styles'
import Block from './block'

const Grid: FC = () => {
  return (
    <Container className="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, idxRow) => {
          return (
            <Row className="grid-row-container">
              {Children.toArray(
                [...Array(9)].map((_, idxBlock) => {
                  return <Block colIndex={idxBlock} rowIndex={idxRow} />
                })
              )}
            </Row>
          )
        })
      )}
    </Container>
  )
}

export default Grid
