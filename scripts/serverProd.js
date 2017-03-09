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


app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '../dist/index.html'));
});



app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});
