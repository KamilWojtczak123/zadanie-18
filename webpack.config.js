const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
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
    const plugins: [
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new webpack.optimize.UglifyJsPlugin()
    ]
    
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.bundle.js'
    },
        
    devServer: {
        proxy: {
            'socket.io':{
                target:'http://localhost:3000',
                ws: true
            }
        }
    }
};