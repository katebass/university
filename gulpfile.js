var qulp = require('gulp'),
	stylus = require('gulp-stylus'),
	autoprefix = require('gulp-autoprefixer'),
  bs = require('browser-sync').create();

gulp.task("stylus", function(){
	return gulp.src("./stylus/main.styl")
			.pipe(stylus())
			.pipe(gulp.dest("./css"))
			.pipe(bs.stream());
});

gulp.task('html', function () {
  return gulp.src('./*.html')
    .pipe(connect.reload());
});
 
gulp.task('serve', ['stylus'], function(){
  bs.init({
    server: './'
  });
  gulp.watch('./*.{html,js}').on('change', bs.reload);
});


gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch('./stylus/**/*.styl', ['stylus']);
});
 
gulp.task('default', ['watch', 'serve']); 