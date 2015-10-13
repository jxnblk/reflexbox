
require('babel/register')()

var webpack = require('webpack')
var postcssImport = require('postcss-import')
var postcssCustomMedia = require('postcss-custom-media')
var postcssCustomProperties = require('postcss-custom-properties')
var autoprefixer = require('autoprefixer')

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
        loaders: ['style', 'css', 'postcss']
      }
    ]
  },

  plugins: [
    new webpack.IgnorePlugin(/react-addons|react-dom/)
  ],

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
  }

}

