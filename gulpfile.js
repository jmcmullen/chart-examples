// Import required dependencies.
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    filter = require('gulp-filter'),
    concat = require('gulp-concat'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglify'),
    gls = require('gulp-live-server');

var server = gls.static('app', '1337');
server.start();

var files = {
  scss: {
    src: 'src/scss/**/*.scss',
    dest: 'app/assets/css/',
    task: 'scss-compile'
  },
  jade: {
    src: 'src/jade/**/*.jade',
    dest: 'app/',
    task: 'jade-compile'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'app/assets/js',
    task: 'move-js'
  },
  libs: {
    src: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/chartist/dist/chartist.js',
      'node_modules/chartist/dist/chartist.min.css'
    ],
    dest: 'app/assets/libs',
    task: 'move-libs'
  }
};

gulp.task('scss-compile', function() {
  return gulp.src(files.scss.src)
    .pipe(sass())
    .pipe(gulp.dest(files.scss.dest));
});

gulp.task('jade-compile', function() {
  return gulp.src(files.jade.src)
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(files.jade.dest));
});

gulp.task('move-js', function() {
  return gulp.src(files.js.src)
    .pipe(gulp.dest(files.js.dest));
});

gulp.task('move-libs', function() {
  return gulp.src(files.libs.src)
    .pipe(gulp.dest(files.libs.dest));
})

/*
gulp.task('bundle-js', function() {
  return gulp.src([
    'js/*.js'
  ])
  .pipe(concat('bundle.js'))
  .pipe(uglify())
  .pipe(gulp.dest('assets/js'));
});
*/

gulp.task('watch', function() {
  // Watch each task for a file change.
  Object.keys(files).forEach(function(element, index) {
    gulp.watch([files[element].src], [files[element].task]);
  });
  // Update the live server when a file is compiled.
  gulp.watch(['app/**/*.*'], function(file) {
    server.notify.apply(server, [file]);
  })
});

gulp.task('default', ['move-libs', 'move-js', 'watch']);
