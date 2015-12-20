(function () {
  'use strict';

  angular
    .module('auth')
    .config(config);

  function config($stateProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'auth/views/login.tpl.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      });
  }
}());
