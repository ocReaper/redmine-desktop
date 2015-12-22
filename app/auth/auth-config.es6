(function () {
  'use strict';

  angular
    .module('auth')
    .config(config);

  function config(visorProvider) {
    var loggedUserTokenStorageKey = 'loggedUserRedmineApiKey'
      , loginState = 'login'
      , defaultState = 'home';

    visorProvider.notAuthorizedRoute = loginState;
    visorProvider.homeRoute = defaultState;

    visorProvider.authenticate = function ($q, $cookies, $log, $state, localStorageService) {
      // ngInject is necessary for minification
      'ngInject';

      var loggedUserToken = localStorageService.get(loggedUserTokenStorageKey);

      if (!loggedUserToken) {
        $log.debug('Application starts with no logged user');
        $state.go(loginState);
        return $q.reject(null);
      }

      $log.debug('Application starts with logged user #token %s', loggedUserToken);
      $state.go(defaultState);
    };
  }
}());
