(function () {
  'use strict';

  angular
    .module('redmineDesktop')
    .config(config);

  function config($urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
  }
}());
