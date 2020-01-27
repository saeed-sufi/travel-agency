var gulp = require('gulp'),
  minImage = require('gulp-imagemin'),
  del = require('del'),
  usemin = require('gulp-usemin'),
  rev = require('gulp-rev'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  browserSync = require('browser-sync').create();

gulp.task('previewDist', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: 'dist'
    }
  });
})


gulp.task('copyGeneralFiles', ['deleteDistFolder'], function() {
  var pathToCopy = [
    './app/**/*',
    '!./app/temp',
    '!./app/temp/**',
    '!./app/assets/images/**',
    '!./app/assets/scripts/**',
    '!./app/assets/styles/**',
    '!./app/index.html'
  ]
  gulp.src(pathToCopy)
    .pipe(gulp.dest('./dist'))
})

gulp.task('usemin', ['deleteDistFolder', 'styles', 'scripts'], function() {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [function() {return rev()}, function() {return cssnano()}],
      js: [function() {return rev()}, function() {return uglify()}]
    }))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('deleteDistFolder', function() {
  return del('./dist')
})

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
  return gulp.src(['./app/assets/images/**/*', '!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
    .pipe(minImage({
      progressive: true,
      interlaced: true,
      multipass: true,
    }))
    .pipe(gulp.dest('./dist/assets/images'))
})

gulp.task('build', ['deleteDistFolder', 'optimizeImages', 'usemin', 'copyGeneralFiles']);