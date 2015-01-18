var path = require('path')
  , gulp = require('gulp')
  , webpack = require('gulp-webpack')
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
gulp.task('webpack', ['clean'], function () {
  return gulp.src('client/boot.js')
    .pipe(webpack({
      watch: true,
      devtool: 'source-map',
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
      }
    }))
    .pipe(gulp.dest('public/build'));
});

// LESS compilation.
gulp.task('less', ['clean'], function () {
  return gulp.src('client/styles.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [
        'node_modules',
        'bower_components',
        'client/less'
      ]
    }))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public/build'));
});

// Start the server.
gulp.task('server', function () {
  nodemon({ script: 'server.js', ext: 'hbs js', ignore: ['client/*', 'public/*'] })
    //.on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

// Watch for relevant changes.
gulp.task('watch', function () {
  gulp.watch('client/**/*.less', ['less']);
});

// Default task.
gulp.task('default', ['webpack', 'less', 'server', 'watch']);
