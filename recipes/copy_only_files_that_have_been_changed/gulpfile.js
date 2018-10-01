"use strict";

const gulp = require("gulp");

gulp.task("assets", function() {
    return gulp.src("src/assets/**", { since: gulp.lastRun("assets") })
               .pipe(gulp.dest("./dist/assets"))
});

gulp.watch("src/assets/**", gulp.series("assets"));