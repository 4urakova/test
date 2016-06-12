var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnext = require("postcss-cssnext");

gulp.task("css", function () {
  var processors = [
    cssnext({
      "customProperties": true,
      "customMedia": true,
      "custonSelectors": true,
    }),
    autoprefixer({
      browsers:["Last 3 versions"]})
  ];
  return gulp.src("postcss/style.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("css"));
});

gulp.task("watch", function () {
  gulp.watch("**/*.css", ["css"]);
});

  gulp.task("default", ["css","watch"]);
