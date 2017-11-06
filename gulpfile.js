var gulp    = require('gulp');
var browserSync = require('browser-sync').create();
var gulpSass = require('gulp-sass');

// Static Server & watching scss / html files
gulp.task('server', function(){
    browserSync.init({
        server: './app'

    });

    gulp.watch('app/scss/*.scss', ['sass']);
});

// Compile sass into CSS
gulp.task('sass', function(){
    return gulp.src('app/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/css'));
});