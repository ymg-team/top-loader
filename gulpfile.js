"use strict"

const gulp = require('gulp'),
    path = require('path'),
    sass = require('gulp-sass'),
    cssmin = require('gulp-cssmin'),
    jsmin = require('gulp-minify'),
    DIST_DIR = 'dist',
    SASS_DIR = 'src/sass',
    JS_DIR = 'src/javascript'

gulp.task('sass', function(){
    return gulp.src(SASS_DIR + '/*.scss')
        .pipe(sass({
                includePaths: [SASS_DIR],
                outputStyle: 'expanded'
            }))
        .pipe(gulp.dest(DIST_DIR))
        .pipe(cssmin())
        .pipe(gulp.dest(DIST_DIR))
})

gulp.task('js', function(){
    return gulp.src(JS_DIR + '/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest(DIST_DIR))
})

gulp.task('watch', function(){
    gulp.watch(SASS_DIR + '/**', ['sass'])
    gulp.watch(JS_DIR + '/**', ['js'])
})

gulp.task('default', ['sass', 'js', 'watch'])
