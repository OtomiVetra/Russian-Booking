require("dotenv").config();
const express = require('express');
const cors = require('cors');
require("./models/db");
const SuitController = require('./controllers/Suit');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());


app.get('/suites', SuitController.list);
app.get('/suites/:id', SuitController.getById);

app.use('*', (req, res) => {
  res.status(404).json({
    message: '404 Not Found',
  });
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message } = err;
  console.log({ err });
  res.status(statusCode).send({
    message: statusCode === 500 ? 'На сервере произошла ошибка' : message,
  });
});


app.listen(PORT, () => {
  console.log(`Server app listening at http://localhost:${PORT}`);
});