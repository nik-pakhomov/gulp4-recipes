"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");
const cleanCss = require("gulp-clean-css");

gulp.task("styles", function() {
    return gulp.src(["src/css/app.less", "src/css/*css"])
        .pipe(less())
        .pipe(concat("css/style.css"))
        .pipe(cleanCss())
        .pipe(gulp.dest("./dist/"))
});