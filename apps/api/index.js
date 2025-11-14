import express from 'express';
import cors from 'cors'; // Importe o pacote cors

const app = express();

// Use o middleware ANTES das suas rotas
app.use(cors()); 

// Sua rota 
app.get('/hello', (req, res) => {
  res.json({ message: 'Hello Bootcamp!' });
});

app.listen(3000, () => {
  console.log('API rodando na porta 3000');
});