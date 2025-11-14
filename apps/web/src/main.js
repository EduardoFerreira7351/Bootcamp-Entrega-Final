import './app.js'

// registra service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/src/service-worker.js')
      .then(() => console.log('Service worker registrado'))
      .catch(err => console.log('SW registro falhou:', err));
  });
}
