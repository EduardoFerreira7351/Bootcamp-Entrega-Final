const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

document.getElementById('call-api').addEventListener('click', async () => {
  const el = document.getElementById('api-response');
  try {
    const res = await fetch(`${API_URL}/api/hello`);
    const json = await res.json();
    el.textContent = 'API: ' + (json?.msg || JSON.stringify(json));
    el.setAttribute('data-testid', 'api-ok');
  } catch (err) {
    el.textContent = 'Erro conectando API: ' + err.message;
  }
});
