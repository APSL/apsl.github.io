// Karma configuration

var path = require('path')

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'app/**/*.spec.@(js|jsx)'
      // each file acts as entry point for the webpack configuration
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'app/**/*.spec.@(js|jsx)': ['webpack', 'sourcemap']
    },

    // webpack watches dependencies and configuration
    // karma watches the test entry points (you don't need to specify the entry option)
    webpack: {
      module: {
        // watch: true,
        loaders: [
          {
            loader: 'babel',
            include: path.resolve(__dirname, 'app'),  // exclude: /(node_modules|bower_components)/,
            test: /\.jsx?$/,
            query: {
              cacheDirectory: true,
              // plugins: ['transform-runtime'],  // Have issues with Babel 6 at the moment.
              presets: ['es2015', 'react']
            }
          }
        ]
      },
      resolve: {extensions: ['', '.js', '.jsx']},
      devtool: 'inline-source-map'
    },

    // webpack-dev-middleware configuration
    webpackMiddleware: {
      noInfo: true
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
