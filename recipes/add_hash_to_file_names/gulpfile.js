"use strict";

const gulp = require("gulp");
const less = require("gulp-less");

gulp.task("styles", function() {
    return gulp.src(["src/css/app.less", "src/css/*css"])
        .pipe(less())
        .pipe(hash())
        .pipe(gulp.dest("./dist/"))
        .pipe(hash.manifest("assets.json", {
            deleteOld: true, // delete old manifest file file before create new
            sourceDir: "./"  // directory where manifest file will be written
        }))
        .pipe(gulp.dest("./dist/"))
});