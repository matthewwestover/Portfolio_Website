import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './providers/ThemeProvider';
import { BrowserRouter, } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
