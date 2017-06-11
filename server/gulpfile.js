import gulp from 'gulp';
import gulpBabel from 'gulp-babel';


gulp.task('babelBuild', () =>
  gulp.src('src/**/*.js')
    .pipe(gulpBabel({
      presets: ['es2015']
    }))
    .pipe(gulp.dist('dest'))
);
