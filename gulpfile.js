var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();

// Task for building blog when something changed:
gulp.task('build', shell.task(['bundle exec jekyll serve --watch']));
// Or if you don't use bundle:
// gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({
    // startPath: '_site/',
    server: '_site/',
    // browser: browser,
    port: 4000 // Add this line to change the default port
  });
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});

gulp.task('default', ['build', 'serve']);