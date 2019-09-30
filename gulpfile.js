var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("here is a test on default");
});

gulp.task('html', function() {
  console.log("here the html");
});

gulp.task('styles', function() {
  console.log("Imagine css here.");
});

gulp.task('watch', function() {
  watch("./app/index.html", function() {
    gulp.start('html');
  })

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start('styles');
  });
});