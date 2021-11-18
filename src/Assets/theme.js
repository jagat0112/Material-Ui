import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "black",
        },
      },
    },
  },
});

export default theme;
