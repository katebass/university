var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    autoprefix = require('gulp-autoprefixer'),
    rupture = require('rupture'),
    bs = require('browser-sync').create(),
    notifier = require('node-notifier');

function onError (e) {
	console.log(e.message);
	notifier.notify({
		title: 'stylus error',
		message: e.message + e.filename
	})
}

gulp.task("stylus", function(){
    return gulp.src("./stylus/main.styl")
        .pipe(stylus({
            use: [rupture()],
            compress: true
        }).on('error', onError))
        .pipe(gulp.dest("./css"))
        .pipe(bs.stream());
});


gulp.task('serve', ['stylus'], function(){
    bs.init({
        server: './'
    });
});


gulp.task('watch', function () {
    gulp.watch('./*.{html,js}').on('change', bs.reload);
    gulp.watch('./stylus/**/*.styl', ['stylus']);
});

gulp.task('default', ['watch', 'serve']);
