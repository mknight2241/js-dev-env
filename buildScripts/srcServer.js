import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function (request, response) {
  response.sendFile(path.join(__dirname, '../src/index.html'));
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