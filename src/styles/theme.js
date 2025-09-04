import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D47A1"
    },
    secondary: {
      main: "#FFB300"
    }
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  }
});

export default theme;