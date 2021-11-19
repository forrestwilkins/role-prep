import { createTheme } from "@mui/material/styles";

const initialTheme = createTheme();
export const BLACK = initialTheme.palette.grey[900];
export const WHITE = initialTheme.palette.grey[100];

const globalTheme = createTheme({
  typography: {
    fontFamily: "Inter",
  },

  palette: {
    background: {},
  },
});

const theme = createTheme({
  ...globalTheme,

  components: {
    MuiPaper: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
