var gulp         = require('gulp');
var browserSync  = require('browser-sync');
// var autoprefixer = require('gulp-autoprefixer');
// var concat       = require('gulp-concat');
// var csscomb      = require('gulp-csscomb');
// var cssnano      = require('gulp-cssnano');
var eslint       = require('gulp-eslint');
var notify       = require('gulp-notify');
var plumber      = require('gulp-plumber');
// var sass         = require('gulp-sass');
// var sourcemaps   = require('gulp-sourcemaps');
// var uglify       = require('gulp-uglify');

var onError = function(err) {
  notify.onError({
    title:    "Error",
    message:  "<%= error %>",
  })(err);
  this.emit('end');
};

var plumberOptions = {
  errorHandler: onError,
};

// gulp.task('sass', function() {
//   var postCSSOptions = require('./config.postcss.json');
//   var autoprefixerOptions = postCSSOptions.autoprefixer;

//   var sassOptions = {
//     includePaths: [
//       // 'node_modules/bourbon/app/assets/stylesheets',
//     ]
//   };

//   return gulp.src('_sass/**/*.scss')
//     .pipe(plumber(plumberOptions))
//     .pipe(sourcemaps.init())
//     .pipe(sass(sassOptions))
//     .pipe(autoprefixer(autoprefixerOptions))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('css'));
// });

// gulp.task('dist:css', function() {
//   return gulp.src('css/**/*.css')
//     .pipe(csscomb('.csscomb.dist.json'))
//     .pipe(cssnano())
//     .pipe(gulp.dest('css'));
// });

gulp.task('eslint', function() {
  return gulp.src('js/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

// gulp.task('concat', ['eslint'], function() {
//   return gulp.src([
//       '_js/utility.js',
//     ])
//     .pipe(sourcemaps.init())
//     .pipe(concat('utility.js'))
//     .pipe(sourcemaps.write('./'))
//     .pipe(gulp.dest('js'));
// });

// gulp.task('dist:js', function() {
//   return gulp.src([
//       '_js/**/*.js',
//     ])
//     .pipe(uglify())
//     .pipe(gulp.dest('js'));
// });

gulp.task('watch', function() {
  var browserSyncConfig = require('./bs-config.js');

  browserSync.init(browserSyncConfig);

  // gulp.watch('_sass/**/*.scss', ['sass']);
  gulp.watch('js/**/*.js', ['eslint']);
});

// gulp.task('build', ['sass', 'concat']);
// gulp.task('build', ['concat']);

// gulp.task('dist', ['build'], function() {
//   gulp.start('dist:css');
//   gulp.start('dist:js');
// });

gulp.task('default', ['watch']);
