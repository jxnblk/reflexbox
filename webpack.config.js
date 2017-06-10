const path = require('path')

module.exports = {
  entry: './docs/entry.js',

  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'reflexbox': path.join(__dirname, 'dist')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: 'raw-loader'
      }
    ]
  },

  devServer: {
    contentBase: 'docs/',
    historyApiFallback: true
  }
}
