
var express = require('express');
var app = express();

const internal_port = 8000;
const external_port = 8081;

app.get('/', function (req, res) {
  res.send('Hello, World!');
});

app.listen(internal_port, function () {
  console.log(`Accessible from local machine browser at http://localhost:${external_port}/`);
});
