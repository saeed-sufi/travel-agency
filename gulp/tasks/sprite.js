var gulp = require('gulp'),
  svgSprite = require('gulp-svg-sprite'),
  rename = require('gulp-rename');

  config = {
    shape: {
      spacing: {
        padding: 1
      }
    },
    mode: {
      css: {
        render: {
          css: {
            template: './gulp/templates/sprites.css'
          }
        }
      }
    }
  }

  gulp.task('svgSprite', function() {
    return gulp.src('./app/assets/images/icons/**/*.svg')
      .pipe(svgSprite(config))
      .pipe(gulp.dest('./app/temp/sprites/'));
  })

  gulp.task('copySpriteCss', function() {
    return gulp.src('./app/temp/sprites/css/*.css')
      .pipe(rename('_sprites.css'))
      .pipe(gulp.dest('./app/assets/styles/modules/'))
  })

