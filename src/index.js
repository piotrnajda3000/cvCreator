import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components/macro";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";

import CvCreator from "./components/CvCreator";
import { SAMPLE_CV, EMPTY_CV } from "./cvData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <CvCreator emptyCv={EMPTY_CV} sampleCv={SAMPLE_CV} />
  </ThemeProvider>
);
