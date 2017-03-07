import {resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
    devtool: 'inline-source-map',

    entry: [ 'webpack-hot-middleware/client?reload=true', resolve(__dirname, 'src/index')],

    target: 'web',

    output: {
        path: resolve(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    plugins: [
        // Create index.html from template. Will inject bundle.js into index.html
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Tether: "tether"            
        }),
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
            { test: /\.(woff|woff2)$/, use: 'url-loader?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' }
        ]
    }
};
