import React from "react";
import Banner from "./component/Banner/Banner";
import Info from "./component/Info/Info";
import style from "./App.sass";
import { ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#999999"
    },
    secondary: {
      main: grey[600]
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
