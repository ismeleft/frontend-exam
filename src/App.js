import React from "react";
import Banner from "./component/Banner/Banner";
import Info from "./component/Info/Info";
import { ThemeProvider, createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";
import "./App.sass";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";
import useDialogStore from "./component/DialogComponent/DialogStore";
import DialogComponent from "./component/DialogComponent/DialogComponent";
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
  const { isOpen, jobDetails, closeDialog } = useDialogStore();
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="pageLayout">
            <Banner />
            <Info />
            {isOpen && (
              <DialogComponent
                jobDetails={jobDetails}
                closeDialog={closeDialog}
                open={isOpen}
              />
            )}
          </div>
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
