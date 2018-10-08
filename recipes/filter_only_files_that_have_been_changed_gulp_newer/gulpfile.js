"use strict";

const gulp = require("gulp");
const newer = require("gulp-newer");

gulp.task("assets", function() {
    return gulp.src("src/assets/**", { since: gulp.lastRun("assets") })
               .pipe(newer("dist"))
               .pipe(gulp.dest("dist"));
});