(function () {
  'use strict';

  /* @ngdoc object
   * @name redmineDesktop
   * @description
   *
   */
  angular
    .module('redmineDesktop', [
      'ngAria',
      'ngCookies',
      'ngMaterial',
      'ui.router',
      'visor',
      'home',
      'auth'
    ]);
}());
