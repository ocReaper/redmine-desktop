'use strict';

var runElectron = require("gulp-run-electron");

module.exports = function (gulp, $, config) {
  gulp.task('electron', function () {
    gulp
      .src(config.buildDir)
      .pipe(runElectron());
  });

  gulp.task('watch', watcherTask);

  function watcherTask() {
    gulp
      .watch([config.unitTestFiles], ['unitTest', runElectron.rerun])
      .on('close', function (code) {
        // Gulp watch exits when error occured during build.
        // Just respawn it then.
        watcherTask();
      });

    gulp
      .watch([config.appFiles, '!' + config.unitTestFiles], ['build', runElectron.rerun])
      .on('close', function (code) {
        // Gulp watch exits when error occured during build.
        // Just respawn it then.
        watcherTask();
      });
  }
};
