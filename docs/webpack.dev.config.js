
require('babel/register')()

var _ = require('lodash')
var webpack = require('webpack')
var config = require('./webpack.config')

module.exports = _.assign({}, config, {

  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './docs/entry'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.IgnorePlugin(/react-addons|react-dom/)
  ],

  devServer: {
    historyApiFallback: true,
    hot: true
  }

})

