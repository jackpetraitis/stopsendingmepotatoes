var gulp = require('gulp');

gulp.task('default', function(){
	//code for default task goes here
});

gulp.task('sass', function(){
	gulp.src('./scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'));
});
