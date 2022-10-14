import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "../src/store";
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyle } from "./GlobalStyle";
import { App } from '../src/App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
