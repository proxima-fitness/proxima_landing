import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error('Root element with id "root" not found');
}
