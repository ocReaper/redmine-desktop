'use strict';

module.exports = function (gulp, $, config) {
  gulp.task('browserSync', function () {
    $.browserSync({
      host: config.host,
      open: 'external',
      port: config.port,
      server: {
        baseDir: config.buildDir
      }
    });
  });

  gulp.task('watch', watcherTask);

  function watcherTask() {
    $.browserSync.reload();

    gulp
      .watch([config.unitTestFiles], ['unitTest'])
      .on('close', function (code) {
        // Gulp watch exits when error occured during build.
        // Just respawn it then.
        watcherTask();
      });

    gulp
      .watch([config.appFiles, '!' + config.unitTestFiles], ['build', $.browserSync.reload])
      .on('close', function (code) {
        // Gulp watch exits when error occured during build.
        // Just respawn it then.
        watcherTask();
      });
  }
};
