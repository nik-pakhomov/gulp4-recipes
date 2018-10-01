"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");

gulp.task("styles", function() {
    return gulp.src(["src/css/app.less", "src/css/*css"])
        .pipe(less())
        .pipe(concat("css/style.css"))
        .pipe(gulp.dest("./dist/"))
});

gulp.watch("src/css/*", gulp.series("styles"));

// To prevent watcher run after styles task has been finished
gulp.task("watch", function() {
    gulp.watch("src/css/*", gulp.series("styles"));
});