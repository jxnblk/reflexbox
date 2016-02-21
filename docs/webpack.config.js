
require('babel-register')

var webpack = require('webpack')

module.exports = {

  entry: {
    dev: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './docs/dev.entry',
      './docs/entry'
    ],
    bundle: [
      './docs/entry'
    ]
  },

  output: {
    path: __dirname,
    publicPath: 'docs',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|react\-docgen/,
        loaders: [
          // 'react-hot',
          'babel'
        ]
      },
      {
        test: /\.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css'
        ]
      }
    ]
  },

  node: {
    fs: 'empty'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    // historyApiFallback: {
    //   index: '/docsdev'
    // },
    hot: true
  }

}

