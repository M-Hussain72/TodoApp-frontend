import ReactDOM from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')).render(
  <SnackbarProvider>
    <App />
  </SnackbarProvider>
);
