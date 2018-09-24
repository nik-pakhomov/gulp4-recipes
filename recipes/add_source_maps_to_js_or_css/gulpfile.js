"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("styles", function() {
    return gulp.src(["src/css/app.less", "src/css/*css"])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat("css/style.css"))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./dist/"))
});