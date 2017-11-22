var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname + '/build');
var APP_DIR = path.resolve(__dirname + '/src');

var config = {
    entry: APP_DIR + '/app.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: BUILD_DIR,
        port: 9000,
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel-loader'
            }
        ]
    },
    node: {
        net: 'empty',
        tls: 'empty',
        dns: 'empty'
    }
};
module.exports = config;