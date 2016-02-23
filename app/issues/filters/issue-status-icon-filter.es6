(function () {
  'use strict';

  /**
   * @ngdoc filter
   * @name issues.filter:issueStatusIcon
   *
   * @description
   *
   * @param {Array} input The array to filter
   * @returns {Array} The filtered array
   *
   */
  angular
    .module('issues')
    .filter('issueStatusIcon', issueStatusIcon);

  function issueStatusIcon() {
    return (status) => {
      switch (status) {
        case 1:
          return 'fire';// new
          break;
        case 2:
          return 'hourglass-alt';// in progress
          break;
        case 3:
          return 'flag';// feedback
          break;
        case 4:
          return 'thumb-up';// resolved
          break;
        case 5:
          return 'spinner';// waiting for deploy
          break;
        case 6:
          return 'check';// closed
          break;
        case 7:
          return 'thumb-down';// rejected
          break;
      }
    };
  }
}());
