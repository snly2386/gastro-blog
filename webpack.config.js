var path    = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    mainEntry: './public/js/app.js'
  },
  devServer: {
    inline: true,
    port: 8000
  },
  output: {
    path: './public/js',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  }
}
