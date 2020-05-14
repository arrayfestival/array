const cleanCSS = require('gulp-clean-css')
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const gzip = require('gulp-gzip')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const watch = require('gulp-watch')

gulp.task('sass', function () {
  return gulp.src('assets/sass/main.scss')
  .pipe(sass()) // Compiles Sass to CSS
  .pipe(autoprefixer()) // Auto-prefix the CSS (e.g. -webkit-transition etc.), with default options
  .pipe(cleanCSS()) // Minifies compiled CSS
  .pipe(rename({extname: '.min.css'}))
  .pipe(gulp.dest('assets/css')) // Moves compiled files to final location
})

gulp.task('watch', function () {
  // If any .scss files change, automatically run the relevant compilation task
  gulp.watch(['assets/sass/**/*.scss', 'assets/sass/*.scss'], ['sass'])
})

// gzip compress all sass files
gulp.task('gzip-sass', function () {
  gulp.src('assets/css/main.min.css')
  .pipe(rename('main.min.css'))
  .pipe(gzip())
  .pipe(gulp.dest('assets/css'))
})

gulp.task('default', ['sass', 'watch']) // This task runs when you type "gulp" into the terminal
gulp.task('build', ['sass', 'gzip-sass']) // This task runs on deployment, or when you type "gulp build" into the terminal
