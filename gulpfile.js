var gulp = require("gulp");                 // require finds out the package in the Node modules
var sass = require("gulp-sass");
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var uglify = require("gulp-uglify"); // to minify js code  // for css we use  gulp-cssnano
var gulpIf= require("gulp-if");

gulp.task('sass', function () {
    return gulp.src('src/app/scss/**/*.scss')                //globbing
        .pipe(sass())       // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('src/app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: 'src/app'
        }
    });
    gulp.watch('src/app/scss/**/*.scss', gulp.series(['sass']));
    gulp.watch('src/app/*.html', browserSync.reload);
    gulp.watch('src/app/*.js', browserSync.reload)
});

gulp.task('useref', function () {
    return gulp.src('src/app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('src/dist'))
});

/*
gulp.task('watch', gulp.series(['sass', 'serve']), function (){    //gulp.task('watch', [array of tasks to complete before watch], function ()
    gulp.watch('src/app/scss/.scss', gulp.series(['sass']));      // .js means globbing in node , i.e. finding files ending with .js  in root folder(**) and its child folders(*).
});
 */

/*
gulp.task("watch", function () {
    // Watch .js files in all folders within our src directory, when a file change
    // perform the default task defined above.
    gulp.watch('src/app/.js',gulp.series(['scripts']));
    gulp.watch('src/app/.scss', gulp.series(['sass']));
});
 */

//run-sequence can be used to define the sequence of tasks to execute

