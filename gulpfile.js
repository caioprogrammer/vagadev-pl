var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('compilar-scss', function(){
  return gulp.src(['*.scss', 'src/scss/*.scss'])
  .pipe(sass().on('error', function(error){
    console.log('error')
  }))
  .pipe(concat('style.css'))
  .pipe(gulp.dest('dist/css'))
});

gulp.task('compilar-js', function(){
  return gulp.src(['src/js/*.js'])
  .pipe(concat("all.js"))
  .pipe(uglify())
  .pipe(rename({ suffix: ".min" }))
  .pipe(gulp.dest("dist/js"));
});



gulp.task('monitorar', function(){
  gulp.watch(['*.scss', 'src/scss/*.scss'], gulp.series('compilar-scss'))
  gulp.watch(['*.js', 'src/js/*.js'], gulp.series('compilar-js'))
});

gulp.task('default', gulp.series('monitorar'))