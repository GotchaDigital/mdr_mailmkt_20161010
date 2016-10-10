var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task( 'reload', function()
{
	gulp.src('index.html').pipe( livereload() );
});

gulp.task( 'default', function()
{
	livereload.listen();
	gulp.watch( '*.html', [ 'reload' ] );
});