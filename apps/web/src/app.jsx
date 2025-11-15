import React, { useState } from 'react'; // <-- Não precisamos mais do useEffect

// 1. Pega a URL da API (isso fica igual)
const API_URL = import.meta.env.VITE_API_URL || '';

function App() {
  // 2. Mude a mensagem inicial
  const [message, setMessage] = useState('API: não verificada');
  const [error, setError] = useState(null);

  // 3. A função de buscar dados (fica quase igual, só tiramos ela de dentro do useEffect)
  const fetchData = async () => {
    setMessage('Carregando...'); // Avisa que está carregando
    setError(null);

    if (!API_URL) {
      setError('A URL da API não está definida.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/hello`);
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }
      const data = await response.json();
      setMessage(data.message); // Sucesso!
      setError(null);
    } catch (err) {
      console.error('Falha ao buscar dados:', err);
      setError('Não foi possível conectar à API.');
      setMessage('');
    }
  };

  // 4. O useEffect FOI REMOVIDO

  return (
    <div className="App">
      <h1>Meu PWA do Bootcamp</h1>
      {/* (Opcional) Você pode tirar o "TESTE GIGANTE" agora */}
      
      {/* 5. Adicione o botão e a mensagem */}
      <button onClick={fetchData}>
        Chamar API
      </button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && (
        <p data-testid="api-message">
          Mensagem da API: <strong>{message}</strong>
        </p>
      )}
    </div>
  );
}

export default App;