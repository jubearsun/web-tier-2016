const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

gulp.task('sass', () => {
  return gulp.src('./sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['sass'], () => {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./*.html').on('change', browserSync.reload);
  gulp.watch('./assets/js/*.js').on('change', browserSync.reload);
});

gulp.task('watch', () => {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['serve']);

