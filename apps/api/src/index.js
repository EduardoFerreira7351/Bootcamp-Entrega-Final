import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  return res.json({ ok: true, msg: 'Hello Bootcamp from API!' });
});

app.get('/api/health', (req, res) => res.json({ ok: true, uptime: process.uptime() }));

app.listen(port, () => {
  console.log(`API running on :${port}`);
});
