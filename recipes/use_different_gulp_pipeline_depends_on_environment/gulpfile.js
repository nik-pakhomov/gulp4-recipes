"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const concat = require("gulp-concat");
const sourcemaps = require("gulp-sourcemaps");
const gulpIf = require("gulp-if");

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development"; 

gulp.task("styles", function() {
    let pipeline = gulp.src(["src/css/app.less", "src/css/*css"]);

    if (isDevelopment) {
        pipeline.pipe(sourcemaps.init());
    }

    pipeline.pipe(less());
    pipeline.pipe(concat("css/style.css"));

    if (isDevelopment) {
        pipeline.pipe(sourcemaps.write());
    }

    return pipeline.pipe(gulp.dest("./dist/"));
});

gulp.task("styles:gulpIf", function() {
    return gulp.src(["src/css/app.less", "src/css/*css"])
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(less())
        .pipe(concat("css/style.css"))
        .pipe(gulpIf(isDevelopment, sourcemaps.write("./")))
        .pipe(gulp.dest("./dist/"))
});