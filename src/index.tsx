import React from 'react'
import ReactDOM from 'react-dom'

import { unregister } from './core'
import { GlobalStyles, theme } from './styles'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>Hello</div>
  </ThemeProvider>,
  document.getElementById('root')
)

unregister()
