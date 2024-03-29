import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  shadows: ['none'],
  palette: {
    primary: {
      main: '#4361ee',
    },
  },

  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 400,
    },
  },
})
theme.shadows[1] = theme.shadows[0]
