import React from 'react';
import App from './App';
import { Root, createRoot } from 'react-dom/client';
const container: HTMLElement = document.getElementById('root')!;
const root: Root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
