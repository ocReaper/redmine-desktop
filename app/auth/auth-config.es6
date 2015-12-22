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

    /* @ngInject */
    visorProvider.authenticate = function ($q, $cookies, $log, $state, $location, localStorageService) {
      var loggedUserToken = localStorageService.get(loggedUserTokenStorageKey)
        , path = $location.path();

      if (!loggedUserToken) {
        $log.debug('Application starts with no logged user');
        $state.go(loginState);
        return $q.reject(null);
      }

      $log.debug('Application starts with logged user #token %s', loggedUserToken);
      if (path === '/' || path === '') {
        $state.go(defaultState);
      }
      return $q.when(null);
    };
  }
}());
