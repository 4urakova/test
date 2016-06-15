var gulp = require("gulp");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnext = require("cssnext");
var csslint = require("gulp-csslint");
var imagemin = require("gulp-imagemin");
var jslint = require("gulp-jslint");
var del = require("del");
var uglifyjs = require("gulp-uglify");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");
var mqpacker = require("css-mqpacker");

gulp.task("css", function () {
  var processors = [
    cssnext({
      "customProperties": true,
      "customMedia": true,
      "custonSelectors": true,
    }),
    autoprefixer({
      browsers:["Last 3 versions"]}),
    mqpacker({
      sort: true
    })
  ];
  return gulp.src("postcss/style.css")
    .pipe(postcss(processors))
    .pipe(gulp.dest("css"));
});

gulp.task("img", function() {
  return gulp.src("img/**/*")
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      svgjPlugins: [{removeViewBox: false}]
    }))
    .pipe(gulp.dest("build/img"));
});

gulp.task("clean", function() {
  return del.sync("build");
});

gulp.task("watch", function() {
  gulp.watch("**/*.css", ["css"]);
});

  gulp.task("default", ["css","watch"]);
 
/*gulp.task("css", function() {
  gulp.src("css/*.css")
    .pipe(csslint())
    .pipe(csslint.reporter());
});

gulp.task("js", function() {
  return gulp.src("js/*.js")
    .pipe(jslint())
    .pipe(jslint.reporter());
});
*/

gulp.task("compressjs", function() {
  return gulp.src("js/*.js")
    .pipe(uglifyjs())
    .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest("build/js"))
});

gulp.task("compresscss", function() {
  return gulp.src("css/*css")
    .pipe(cssnano())
    .pipe(rename({suffix:".min"}))
    .pipe(gulp.dest("build/css"))
});

gulp.task("build", ["clean", "css", "compressjs", "compresscss", "img"]), function() {
  var buildCss = gulp.src(["css/style.css", "css/style.min.css"])
    .pipe(gulp.dest("build/css"));

  var buildFonts = gulp.src("fonts/**/*")
    .pipe(gulp.dest("build/fonts"));

  var buildJs = gulp.src((["js/scripts.js", "js/scripts.min.js"]))
    .pipe(gulp.dest("build/js"));

  var buildHtml = gulp.src("*.html")
    .pipe(gulp.dest("build"));
};