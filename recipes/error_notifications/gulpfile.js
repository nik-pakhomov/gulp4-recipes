"use strict";

const gulp = require("gulp");
const less = require("gulp-less");
const notify = require("gulp-notify");
const combiner = require("stream-combiner2").obj;

gulp.task("styles", function() {
    return combiner(
        gulp.src("src/css/styles.less"),
        less(),
        gulp.dest("dist/css")
    // Handle "error" events from all streams in task
    ).on("error", notify.onError(function(err) {
        return {
            title: "Styles",
            message: err.message
        };
    }));
});