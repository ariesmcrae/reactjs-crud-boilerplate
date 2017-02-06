import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);


app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: config.output.publicPath
}));


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});


app.get('/users', function(request, response) {
  response.json([
    { "id": 1, "firstName":"Bob",   "lastName":"Smith",  "email":"bobs@gmail.com" },
    { "id": 2, "firstName":"Alice", "lastName":"Norton", "email":"alicen@gmail.com" },
    { "id": 3, "firstName":"Tina",  "lastName":"Lee",    "email":"tinal@gmail.com" }
  ]);
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open('http://localhost:' + port);
    }
});
