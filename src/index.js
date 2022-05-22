import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { TokenProvider } from './context/authContext';
import { ThemeProvider } from './context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);

