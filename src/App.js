import React from "react";
import Banner from "./component/Banner/Banner";
import Info from "./component/Info/Info";
import style from "./App.sass";
import { ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

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
    <ThemeProvider theme={theme}>
      <div className={style.pageLayout}>
        <Banner className={style.banner} />
        <Info className={style.info} />
      </div>
    </ThemeProvider>
  );
}

export default App;
