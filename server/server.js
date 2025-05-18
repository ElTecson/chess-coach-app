import express from 'express';
import { connectDB } from './db.js';
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express in root!' });
});

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server listening at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('Failed to connect to DB:', err);
  process.exit(1);
});

