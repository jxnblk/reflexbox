
require('babel-register')

var webpack = require('webpack')
var postcssImport = require('postcss-import')
var postcssCustomMedia = require('postcss-custom-media')
var postcssCustomProperties = require('postcss-custom-properties')
var autoprefixer = require('autoprefixer')

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

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules|react\-docgen/,
        loaders: [ 'react-hot', 'babel' ]
      },
      {
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.css$/,
        loaders: [ 'style', 'css', 'postcss' ]
      }
    ]
  },

  postcss: function () {
    return [
      postcssImport({
        onImport: function (files) {
          files.forEach(this.addDependency);
        }.bind(this)
      }),
      postcssCustomMedia,
      postcssCustomProperties,
      postcssCustomProperties,
      autoprefixer
    ]
  },

  node: {
    fs: 'empty'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    // historyApiFallback: true,
    hot: true
  }

}

