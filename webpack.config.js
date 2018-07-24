const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            }
        ],
    },
}

module.exports = config
