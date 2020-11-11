import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import reportWebVitals from './reportWebVitals';

const defaultTheme = createMuiTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
