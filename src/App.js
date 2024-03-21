import React from "react";
import Banner from "./component/Banner/Banner";
import Info from "./component/Info/Info";
import { ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import "./App.sass";
import { StyledEngineProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: grey[500]
    },
    secondary: {
      main: grey[300]
    }
  }
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className="pageLayout">
          <Banner />
          <Info />
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
