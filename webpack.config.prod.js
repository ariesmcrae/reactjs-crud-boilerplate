import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    debug: true,

    devtool: 'source-map',

    noInfo: false,

    entry: { 
        vendor: path.resolve(__dirname, 'src/vendor'),
        main:   path.resolve(__dirname, 'src/index')
    },

    target: 'web',

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },

    plugins: [
        //Use CommonsChunkPlugin to create a separate bundle of vendor libraries so that they're cached separately.
        new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}), 

        // Create index.html from template. Will inject bundle.js into index.html. Minifi html as well.
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }            
        }),

        // Eliminate duplicate packages when generating bundle
        new webpack.optimize.DedupePlugin(),
        
        //minify js
        new webpack.optimize.UglifyJsPlugin()
    ],

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel'] },
            { test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}
