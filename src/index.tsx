import React from 'react'
import ReactDOM from 'react-dom'

import { unregister } from './core'
import { GlobalStyles, theme } from './styles'
import { Content, Title, Card } from './components'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content>
      <Title>Sudoku</Title>
      <Card>Work in Progress</Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
