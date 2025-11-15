import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx' // O seu app.jsx (sem botão)

// Garantia de que o Service Worker está sendo registrado (como vimos antes)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

// A MÁGICA ESTÁ AQUI:
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)