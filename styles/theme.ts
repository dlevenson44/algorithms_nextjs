import { blue, yellow } from '@mui/material/colors'
import { createTheme, Theme } from '@mui/material/styles'

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: blue[600],
      light: blue[300],
      dark: blue[900],
    },
    secondary: {
      main: yellow[600],
      light: yellow[200],
      dark: yellow[900],
    },
  },
})
