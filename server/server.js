import express from 'express';
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express in root!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server listening at http://localhost:${PORT}`);
});

