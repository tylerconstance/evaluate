const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-ruby-sass');
const autoprefixer = require('gulp-autoprefixer');
const maps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

var autoprefixerBrowsers = [
  '> 3%',
];

var config = {
  sass: './scss/**/*.scss',
  css: './public/css',
};

gulp.task('compileSass', () => {
  return sass(config.sass, {
    style: 'expanded',
    precision: 6,
    sourcemap: true,
  })
  .pipe(maps.init())
  .pipe(autoprefixer({
    browsers: autoprefixerBrowsers,
    cascade: false
  }))
  .pipe(rename('style.css'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest(config.css))
});

gulp.task('babel', () => {
	return gulp.src('./public/scripts/app.js')
		.pipe(babel({
			presets: ['es2015', 'react']
		}))
		.pipe(gulp.dest('./public/scripts/dist'));
});

gulp.task('watch', ['compileSass', 'babel'], () => {
  gulp.watch(config.sass, ['compileSass']);
  gulp.watch('./public/scripts/app.js', ['babel']);
});

gulp.task('default', () => {
	gulp.start('watch');
});
