import { createTheme, colors } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#e62012',
      contrastText: '#e62012'
    },

    // mode: 'dark',

    secondary: {
      main: colors.green[700],
      contrastText: '#000'
    }
  }
  //   typography: {
  //     fontWeight: 500
  //     // fontSize: 26
  //   }
});
