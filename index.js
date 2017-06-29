'use strict';
const express = require('express');

const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(HOST);
console.log('Running on http://' + HOST);