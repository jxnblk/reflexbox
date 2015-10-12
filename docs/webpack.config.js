
require('babel/register')()

var webpack = require('webpack')

module.exports = {

  entry: [
    './docs/entry'
  ],

  output: {
    path: __dirname,
    publicPath: 'docs',
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|react\-docgen/,
        loaders: [
          'react-hot',
          'babel'
        ]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },

  node: {
    fs: 'empty'
  }

}

