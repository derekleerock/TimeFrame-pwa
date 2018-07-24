const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

var config = {
  mode: 'development',
  entry: './src/js/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin(
      [
        { from: 'src/img/*', to: 'img', flatten: true },
        { from: 'src/manifest.json', to: ''}
      ], {}
    )
  ],

  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.png$/,
        use: [{loader: 'file-loader'},]
      },
    ],
  },
}

module.exports = config
