const path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var OptimizeJsPlugin = require('optimize-js-plugin');
var env = process.env.NODE_ENV || 'development';
var plugins = [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            filename: 'index.html',
            inject: 'body',
        })
    ];

if (env === 'production') {
    plugins.push(
        new OptimizeJsPlugin({
            sourceMap: false
        })
    );
}

const plugins = [
    new HtmlWebpackPlugin({
        template: 'client/index.html',
        filename: 'index.html',
        inject: 'body'
    }),
    new UglifyJSPlugin()
]

module.exports = {
<<<<<<< HEAD
    devtool: 'source-map',
    entry: (env !== 'production' ? [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
        ] : []).concat(['./client/index.js']),
=======
    entry: [
        'react-hot-loader/patch',
        './client/index.js'
    ],
>>>>>>> d83955830540d270cf604b07eca06d4d165fa7b6
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    },
<<<<<<< HEAD
    plugins: plugins
=======
    devServer: {
        proxy: {
            '/socket.io': {
                target: 'http://localhost:3000',
                ws: true
            }
        }
    },
    plugins
>>>>>>> d83955830540d270cf604b07eca06d4d165fa7b6
};