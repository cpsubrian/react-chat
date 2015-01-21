var path = require('path')
  , gulp = require('gulp')
  , webpackGulp = require('gulp-webpack')
  , webpack = require('webpack')
  , nodemon = require('gulp-nodemon')
  , less = require('gulp-less')
  , sourcemaps = require('gulp-sourcemaps')
  , autoprefixer = require('gulp-autoprefixer')
  , del = require('del');

// Clean
gulp.task('clean', function (cb) {
  del(['public/build'], cb);
});

// Webpack task.
gulp.task('webpack', function () {
  return gulp.src('client/boot.js')
    .pipe(webpackGulp({
      //devtool: 'source-map',
      output: {
        filename: 'bundle.js'
      },
      resolve: {
        root: path.join(__dirname, 'client'),
        modulesDirectories: [
          'node_modules',
          'bower_components'
        ]
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'jsx-loader' }
        ]
      },
      plugins: [
        // Support for bower components.
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
        ),
        // For production:
        //new webpack.optimize.UglifyJsPlugin({
        //  sourceMap: true, compress: {warnings: false}
        //}),
      ]
    }))
    .pipe(gulp.dest('public/build'));
});

// LESS compilation.
gulp.task('less', function () {
  return gulp.src('client/styles/styles.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [
        'node_modules',
        'bower_components',
        'client/less'
      ],
      compress: true
    }))
    .pipe(autoprefixer('last 10 versions', 'ie 9'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/build'));
});

// Watch for relevant changes.
gulp.task('watch', function () {
  gulp.watch('client/**/*.less', ['less']);
  gulp.watch('client/**/*.js', ['webpack']);
});

// Start the server.
gulp.task('build', ['webpack', 'less', 'watch'], function () {
  nodemon({script: 'server.js', ignore: ['client/**/*.less', 'public/*', 'bower_components/*']})
    //.on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

// Default task.
gulp.task('default', ['clean', 'build']);
