import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import './styles/variables.css';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);