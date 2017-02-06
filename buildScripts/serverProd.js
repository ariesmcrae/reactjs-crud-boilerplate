import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';


/* eslint-disable no-console */
const port = 3000;
const app = express();

//gzip
app.use(compression());

//Express to serve static files
app.use(express.static('dist'));


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get('/users', function(request, response) {
  //pretend that we're hitting backend data
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
