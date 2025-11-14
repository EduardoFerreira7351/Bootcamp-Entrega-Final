import React, { useState, useEffect } from 'react';

// 1. Pega a URL da API da variável de ambiente
const API_URL = import.meta.env.VITE_API_URL || '';

function App() {
  // Estado para guardar a mensagem da API
  const [message, setMessage] = useState('Carregando dados da API...');
  const [error, setError] = useState(null);

  // useEffect roda quando o componente é montado
  useEffect(() => {
    // 3. Função para buscar os dados
    const fetchData = async () => {
      if (!API_URL) {
        setError('A URL da API não está definida.');
        return;
      }

      try {
        // 4. Faz o fetch para o endpoint /hello
        const response = await fetch(`${API_URL}/hello`);

        if (!response.ok) {
          throw new Error(`Erro na API: ${response.statusText}`);
        }

        const data = await response.json();

        // 5. Atualiza o estado com a mensagem da API
        setMessage(data.message);
        setError(null);

      } catch (err) {
        console.error('Falha ao buscar dados:', err);
        setError('Não foi possível conectar à API. Você iniciou o backend?');
        setMessage('');
      }
    };

    fetchData(); // Chama a função
  }, []); // O array vazio [] faz o useEffect rodar só uma vez

  return (
    <div className="App">
      <h1>Meu PWA do Bootcamp</h1>

      {/* Mostra a mensagem de erro ou a mensagem da API */}
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