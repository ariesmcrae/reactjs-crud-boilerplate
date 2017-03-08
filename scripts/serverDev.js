import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import webpackConfig from '../webpack.config.dev';
import chalk from 'chalk';


/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);


app.use(require('webpack-dev-middleware')(compiler,{
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require("webpack-hot-middleware")(compiler));

app.get('*', function(request, response) {
    response.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        const uri = `http://localhost:${port}`;
        console.log(chalk.green(`Server started on ${uri}`)); //eslint-disable-line no-console
        open(uri);
    }
});
