import React from 'react';
import ReactDOM from 'react-dom/client';
import { PaginaDeLogin } from '@/pages/PaginaDeLogin/PaginaDeLogin';
import '@/styles/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <PaginaDeLogin />
  </React.StrictMode>
);