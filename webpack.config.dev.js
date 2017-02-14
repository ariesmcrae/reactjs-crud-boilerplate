import {resolve} from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

export default {
    devtool: 'inline-source-map',

    entry: [ 'react-hot-loader/patch', 'webpack/hot/only-dev-server', resolve(__dirname, 'src/index')],

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
        new webpack.LoaderOptionsPlugin({ debug: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader'] },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    }
}
