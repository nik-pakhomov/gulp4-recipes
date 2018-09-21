"use strict";

const gulp = require("gulp");

gulp.task('copy:files', function() {
    return gulp.src(['src/*.js', 'src/*.css'])
        .pipe(gulp.dest(function (file) {
            return file.extname == '.js' ? 'js' : file.extname == '.css' ? 'css' : 'dest';
        }))
});