import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { UserContextProvider } from "./contexts/UserContext";
import Home from "./pages/Home";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <GlobalStyles />
        <Home />
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
