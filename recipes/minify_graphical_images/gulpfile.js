"use strict";

const gulp = require("gulp");
const newer = require("gulp-newer");
const imagemin = require("gulp-imagemin");

gulp.task("assets", function() {
    return gulp.src("src/assets/**", { since: gulp.lastRun("assets") })
               .pipe(newer("dist"))
               .pipe(imagemin())
               .pipe(gulp.dest("dist"));
});