const gulp = require("gulp");
const babel = require("gulp-babel");
gulp.task("trsp", function () {

    return gulp.src("./src/**/*.js")
            .pipe(babel({
            }))
            .pipe(gulp.dest("./lib/src/"));
});
