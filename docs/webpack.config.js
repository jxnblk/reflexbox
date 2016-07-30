
module.exports = {
  entry: {
    bundle: [
      './docs/entry'
    ]
  },

  output: {
    path: __dirname,
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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

  devServer: {
    contentBase: 'docs'
  }
}

