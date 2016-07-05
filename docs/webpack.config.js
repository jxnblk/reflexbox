
require('babel-register')

module.exports = {
  entry: {
    dev: [
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
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules|react\-docgen/,
        loaders: [
          'babel'
        ]
      },
      {
        test: /\.json$/,
        loaders: [
          'json'
        ]
      }
    ]
  },

  node: {
    fs: 'empty'
  }
}

