(function () {
  'use strict';

  angular
    .module('home')
    .config(config);

  function config($stateProvider, authenticatedOnly) {
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'home/home.tpl.html',
        controller: 'HomeCtrl',
        controllerAs: 'home',
        restrict: authenticatedOnly
      });
  }
}());
