import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2a9461',
    },
    secondary: {
      main: '#03a9f4',
    },
    background: {
      default: '#f5f5f5',
      paper: '#cccccc',
      subtle: '#cbcbcb',
    },
    text: {
      primary: '#333333',
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2a9461',
    },
    secondary: {
      main: '#03a9f4',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
      subtle: '#3a3a3a',
    },
    text: {
      primary: '#ffffff',
    },
  },
});
