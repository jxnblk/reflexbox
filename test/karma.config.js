
module.exports = function (config) {
  config.set({
    browsers: [
      'Firefox',
      'Chrome',
      // 'Safari'
    ],

    autoWatch: true,

    files: [
      'index.js',
    ],

    frameworks: [
      'chai',
      'mocha'
    ],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      // 'karma-safari-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-webpack'
    ],

    preprocessors: {
      'index.js': [ 'webpack' ]
    },

    reporters: [ 'mocha' ],

    webpack: {
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      module: {
        loaders: [
          {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.json$/,
            loader: 'json-loader'
          }
        ]
      }
    },

    webpackMiddleware: {
      noInfo: true
    },

    client: {
      mocha: {
        reporter: 'html',
        ui: 'bdd'
      }
    }

  })
}

