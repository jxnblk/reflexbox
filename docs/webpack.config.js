
require('babel/register')()

var webpack = require('webpack')
// var StaticRenderPlugin = require('static-render-webpack-plugin')

module.exports = {

  entry: {
    // static: ['./static'],
    bundle: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './docs/entry'
    ]
  },

  output: {
    path: __dirname,
    publicPath: 'docs',
    filename: '[name].js',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new StaticRenderPlugin('static.js', routes)
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
  },

  node: {
    fs: 'empty'
  }

}

