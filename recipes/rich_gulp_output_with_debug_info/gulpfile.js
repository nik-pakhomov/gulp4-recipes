"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const debug = require("gulp-debug");

gulp.task("styles", function() {
    return gulp.src(["src/css/app.less", "src/css/*css"])
        .pipe(less())
        .pipe(debug({ title: "less" }))
        .pipe(autoprefixer())
        .pipe(debug({ title: "autoprefixer" }))
        .pipe(concat("css/style.css"))
        .pipe(debug({ title: "concat" }))
        .pipe(gulp.dest("./dist/"))
});