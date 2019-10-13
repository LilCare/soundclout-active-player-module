const express = require('express');
const path = require('path');

const app = express();
const port = 3020;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/test', (req, res) => {
  res.send('It works!');
});

app.listen(port);
