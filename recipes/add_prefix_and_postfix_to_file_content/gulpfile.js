"use strict";

const gulp = require("gulp");
const wrapper = require("gulp-wrapper");

gulp.task("js", function() {
    return gulp.src("src/js/*.js")
        .pipe(wrapper({
            header: "\"use strict\";\n",
            footer: "\n// Copyright"
        }))
        .pipe(gulp.dest("dist/js"));
});