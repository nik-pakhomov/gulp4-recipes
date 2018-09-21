"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");

gulp.task("styles", function() {
    return gulp.src(["src/css/app.less", "src/css/*css"])
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(concat("css/style.css"))
        .pipe(gulp.dest("./dist/"))
});