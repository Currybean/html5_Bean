var gulp=require('gulp');
var sass=require('gulp-sass');
var browserSync=require('browser-sync');

gulp.task('comfile',function(){
    gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle:'expanded'}).on('error',sass.logError))
    .pipe(gulp.dest('./src/css/'))
});
gulp.task('jtsass',function(){
    gulp.watch('./src/sass/*.scss',['comfile'])
});

gulp.task('bro',function(){
    browserSync({
        // server:'./src';
        port:2020,
        proxy:'http://localhost:9999',

        files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
    })
    gulp.watch('./src/sass/*.scss',['comfile'])
});