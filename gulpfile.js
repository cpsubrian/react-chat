var gulp = require('gulp')
  , webpack = require('gulp-webpack')
  , nodemon = require('gulp-nodemon')
  , less = require('gulp-less')
  , sourcemaps = require('gulp-sourcemaps')
  , del = require('del');

// Paths
var paths = {
  client: 'client',
  boot: 'client/boot.js',
  styles: 'client/styles/**/*.less',
  build: 'public/build'
};

// Clean
gulp.task('clean', function (cb) {
  del([paths.build], cb);
});

// Webpack task.
gulp.task('webpack', ['clean'], function () {
  return gulp.src(paths.boot)
    .pipe(webpack({
      watch: true,
      devtool: 'source-map',
      output: {
        filename: 'bundle.js'
      }
    }))
    .pipe(gulp.dest(paths.build));
});

// LESS compilation.
gulp.task('less', ['clean'], function () {
  return gulp.src(paths.styles)
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.build));
});

// Start the server.
gulp.task('server', function () {
  nodemon({ script: 'server.js', ext: 'hbs js', ignore: ['client/*', 'public/*'] })
    //.on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

// Default task.
gulp.task('default', ['webpack', 'less', 'server']);
