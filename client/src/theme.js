import { ThemeProvider, createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#455a64',
      light: '#718792',
      dark: '#1c313a'
    },
    secondary: {
      main: '#616161',
      light: '#8e8e8e',
      dark: '#373737'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
