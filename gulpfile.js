var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();
 



gulp.task('css', function(){
          return gulp.src('app/sass/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(autoprefixer({ browsers: ['last 2 versions']}))
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest('dist/css'))
            .pipe(browserSync.stream())
});

gulp.task('images', function(){
    return gulp.src('app/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});

gulp.task('copy', function(){
    return gulp.src('app/**/*.+(html|js)')
		.pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
});

gulp.task('browserSync', function(){
    console.log("OK");
    browserSync.init({
        server:{
            baseDir:'dist'
        }
    })
});

gulp.task('watch', ['browserSync', 'css'], function(){
    gulp.watch('app/sass/**/*.scss', ['css'])
    gulp.watch('app/**/*.+(html|js)', ['copy'])
});