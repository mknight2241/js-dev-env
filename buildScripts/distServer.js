import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function (request, response) {
  response.json([
    {"id": 1, "firstName": "Matthew", "lastName": "Knight", "email": "matthew.knight@myob.com"},
    {"id": 1, "firstName": "Fiona", "lastName": "Cook", "email": "fiona.cook@myob.com"},
    {"id": 1, "firstName": "Dominic", "lastName": "Shelton", "email": "dominic.shelton@myob.com"}
  ]);  
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});