const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(express.json());

const todoRouter = express.Router();

todoRouter.get('/', (req, res) => {
  res.status(200).json({ message: `${req.method} todos` });
});
todoRouter.post('/', (req, res) => {
  res.status(201).json({ message: `${req.method} todos` });
});
todoRouter.put('/:todoId', (req, res) => {
  res.status(200).json({ message: `${req.method} todos` });
});
todoRouter.patch('/:todoId', (req, res) => {
  res.status(200).json({ message: `${req.method} todos` });
});
todoRouter.delete('/:todoId', (req, res) => {
  res.status(204).json({ message: `${req.method} todos` });
});

app.use('/todos', todoRouter);

app.get('/dog', async (req, res, next) => {
  try {
    const dogResponse = await axios.get(
      'https://dog.ceo/api/breeds/image/random'
    );
    res.status(200).send(`<img src=${dogResponse.data.message} alt="dogggg"/>`);
  } catch (error) {
    next(error);
  }
});

app.use((err, req, res, next) => {
  res.status(500).send('<h1>500 Internal server error !!!</h1>');
});

app.use((req, res) => {
  res.status(404).json({ message: 'resource not found on this server' });
});

app.listen(8003, () => console.log('server 8003'));
