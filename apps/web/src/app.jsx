import React, { useState } from 'react';

// Não precisamos mais do VITE_API_URL, vamos chamar a API pública direto
const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon/pikachu';

function App() {
  const [message, setMessage] = useState('API: não verificada');
  const [error, setError] = useState(null);

  // A função de buscar dados
  const fetchData = async () => {
    setMessage('Carregando da PokeAPI...');
    setError(null);

    try {
      // 1. Chama a URL da PokeAPI
      const response = await fetch(POKE_API_URL);
      
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.statusText}`);
      }
      
      const data = await response.json();
      
      // 2. Pega o nome do Pokémon da resposta
      // O nome vem em 'data.name'. Vamos capitalizar a primeira letra.
      const pokemonName = data.name.charAt(0).toUpperCase() + data.name.slice(1);
      
      setMessage(`Pokémon encontrado: ${pokemonName}!`); // Sucesso!
      setError(null);

    } catch (err) {
      console.error('Falha ao buscar dados:', err);
      setError('Não foi possível conectar à PokeAPI.');
      setMessage('');
    }
  };

  return (
    <div className="App">
      <h1>Meu PWA do Bootcamp</h1>
      
      {/* ADICIONE O data-testid AQUI */}
      <button onClick={fetchData} data-testid="meu-botao">
        Chamar API (Buscar Pikachu)
      </button>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && (
        <p data-testid="api-message">
          <strong>{message}</strong>
        </p>
      )}
    </div>
  );
}

export default App;