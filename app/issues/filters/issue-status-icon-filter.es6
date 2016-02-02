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
          return 'fire';
          break;
        case 2:
          return 'hourglass-alt';
          break;
        case 3:
          return 'flag';
          break;
        case 4:
          return 'thumb-up';
          break;
        case 5:
          return 'spinner';
          break;
        case 6:
          return 'check';
          break;
        case 7:
          return 'thumb-down';
          break;
      }
    };
  }
}());
