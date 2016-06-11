var gulp = require("gulp");
var svgstore = require("gulp-svgstore");

gulp.task("svgstore", function () {
    return gulp
        .src("svg/*.svg")
        .pipe(svgstore({ fileName: "sprite.svg", prefix: "icon-" }))
        .pipe(gulp.dest("img"));
});