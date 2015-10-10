
var configuration = {
  browsers: [
    'Firefox',
    'mobile',
    'tablet',
    'desktop',
    'Safari'
  ],

  customLaunchers: {
    mobile: {
      base: 'Chrome',
      flags: [ '--window-size=320,640' ]
    },
    tablet: {
      base: 'Chrome',
      flags: [ '--window-size=640,480' ]
    },
    desktop: {
      base: 'Chrome',
      flags: [ '--window-size=1280,960' ]
    },
    travisChrome: {
      base: 'Chrome',
      flags: [
        '--window-size=1280,960',
        '--no-sandbox'
      ]
    }
  },

  autoWatch: true,
  // singleRun: true,

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
    'karma-safari-launcher',
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

}

if (process.env.TRAVIS) {
  configuration.singleRun = true
  configuration.browsers = [
    // 'travisChrome',
    'Firefox'
  ]
}


module.exports = function (config) {
  config.set(configuration)
}
