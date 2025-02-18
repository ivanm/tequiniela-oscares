import "./index.css";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { FirebaseAppProvider } from "reactfire";

import { App } from "./App";
import theme from "./theme";
import firebaseConfig from "./firebaseConfig";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <FirebaseAppProvider firebaseConfig={firebaseConfig}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          </FirebaseAppProvider>
        </BrowserRouter>
      </ChakraProvider>
    </RecoilRoot>
  </React.StrictMode>
);
