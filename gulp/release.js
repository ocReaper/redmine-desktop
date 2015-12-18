'use strict';

var utils = require('./release/utils')
  , releaseForOs;

releaseForOs = {
  osx: require('./release/release_osx'),
  linux: require('./release/release_linux'),
  windows: require('./release/release_windows')
};

module.exports = function (gulp, $, config) {
  gulp.task('release', function () {
    return releaseForOs[utils.os()]();
  });
};
