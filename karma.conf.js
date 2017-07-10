// Karma configuration
// Generated on Mon Jul 03 2017 11:42:24 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','browserify'],


    // list of files / patterns to load in the browser
    files: [
      'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js',
      'src/scripts/vendor/*.js',
      'src/scripts/main.js',
	    'src/scripts/index.js',
      'test/*.js'
    ],


    // list of files to exclude
    exclude: [
    	'test/jasmine/*',
      'karma.conf.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    browserify: {
      extensions: ['.js'],
		  watch: true,
		  debug: true
	  },
	  preprocessors: {
		  'test/*.js': ['browserify']
	  },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

	  plugins: [
		  'jasmine',
		  'jasmine-core',
		  'karma-jasmine',
      'karma-firefox-launcher',
		  'karma-opera-launcher',
		  'karma-chrome-launcher',
      'karma-browserify-preprocessor'
	  ],

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome', 'Opera'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};
