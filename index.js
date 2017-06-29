'use strict';
const express = require('express');

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(process.env.PORT || 8080)
console.log('Running app');
console.log(process.env.PORT || 8080);