"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();

gulp.task("assets", function() {
    return gulp.src("src/assets/**")
               .pipe(gulp.dest("dist/assets"));
});

gulp.task("styles", function() {
    return gulp.src("src/css/**")
               .pipe(gulp.dest("dist/css"));
});

gulp.task("html", function() {
    return gulp.src("src/html/**")
               .pipe(gulp.dest("dist"));
});

gulp.task("watch", function() {
    gulp.watch("src/html/**", gulp.series("html"));
    gulp.watch("src/css/**", gulp.series("styles"));
    gulp.watch("src/assets/**", gulp.series("assets"));
});

gulp.task("serve", function() {
    browserSync.init({
        server: "dist"
    });

    browserSync.watch("dist/**/*.*").on("change", browserSync.reload);
});

gulp.task("dev", gulp.series("html", "styles", "assets", gulp.parallel("watch", "serve")));