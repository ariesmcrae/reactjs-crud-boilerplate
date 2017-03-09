import path, {resolve} from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';



const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};



export default {
    devtool: 'source-map',

    entry: { 
        vendor: resolve(__dirname, 'src/vendor'),
        main:   resolve(__dirname, 'src/index')
    },

    target: 'web',

    output: {
        path: resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },

    devServer: {
        contentBase: './dist'
    },

    plugins: [
        new webpack.DefinePlugin(GLOBALS),

        //jquery and tether are needed by Bootstrap 4
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            Tether: "tether"            
        }),
        
        // Generate external CSS file with a hash in filename, then minify
        new ExtractTextPlugin('[name].[contenthash].css'),

        // Hash the files using MD5 so that their names change when the content changes.
        new WebpackMd5Hash(),

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

        //minify js
        new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),

        new webpack.LoaderOptionsPlugin({ debug: true })          
    ],

    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, include: path.join(__dirname, 'src'), use: ['babel-loader'] },
            { test: /\.css$/, use: ExtractTextPlugin.extract('css-loader?sourceMap') },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, use: 'file-loader' },
            { test: /\.(woff|woff2)$/, use: 'url-loader?prefix=font/&limit=5000' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.(png|jpg|svg)$/, use: 'file-loader' }            
        ]
    }
};
