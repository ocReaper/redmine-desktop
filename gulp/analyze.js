'use strict';

module.exports = function (gulp, $, config) {
  // lint source code
  gulp.task('lint', function () {
    var es6Filter = $.filter('**/*.es6', {restore: true});

    return gulp.src([
      config.appScriptFiles,
      config.e2eFiles,
      config.unitTestFiles
    ])
      .pipe($.plumber({errorHandler: function (err) {
        $.notify.onError({
          title: 'Error linting at ' + err.plugin,
          subtitle: ' ', //overrides defaults
          message: err.message.replace(/\u001b\[.*?m/g, ''),
          sound: ' ' //overrides defaults
        })(err);

        this.emit('end');
      }}))
      .pipe(es6Filter)
      .pipe($.eslint())
      .pipe($.eslint.formatEach('./node_modules/eslint-path-formatter'))
      .pipe($.eslint.failOnError())
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.jshint.reporter('fail'))
      .pipe($.jscs({
        esnext: true
      }));
  });

  // run plato anaylysis on JavaScript (ES5) files
  gulp.task('staticAnalysis', function (done) {
    $.multiGlob.glob([config.appScriptFiles, config.e2eFiles, config.unitTestFiles], function (err, matches) {
      if (err) {
        throw new Error('Couldn\'t find files.');
      }

      // only inspect JS (ES5) files
      matches = matches.filter(function (file) {
        return file.match(/.*[.]js/);
      });

      if (matches.length > 0) {
        $.plato.inspect(matches, './report', {}, function () {
          done();
        });
      } else {
        done();
      }
    });
  });

  gulp.task('analyze', ['lint', 'staticAnalysis']);
};
