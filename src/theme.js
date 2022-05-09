import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8b',
      light: '#8eacbb',
      dark: '#34515e'
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
