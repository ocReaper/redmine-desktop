(function () {
  'use strict';

  angular
    .module('auth')
    .config(config);

  function config(visorProvider) {
    var loggedUserTokenStorageKey = 'loggedUserRedmineApiKey'
      , loginState = 'login'
      , defaultState = 'projects';

    visorProvider.notAuthorizedRoute = loginState;
    visorProvider.homeRoute = defaultState;

    /* @ngInject */
    visorProvider.authenticate = function ($q, $cookies, $log, $state, $location, $http, localStorageService, LoggedUser) {
      var loggedUserToken = localStorageService.get(loggedUserTokenStorageKey)
        , path = $location.path();

      if (!loggedUserToken) {
        $log.debug('Application starts with no logged user');
        $state.go(loginState);
        return $q.reject(null);
      }

      $log.debug('Application starts with logged user #token %s', loggedUserToken);

      $http.defaults.useXDomain = true;
      $http.defaults.headers.common['X-Redmine-API-Key'] = loggedUserToken;

      return LoggedUser
        .setUserByToken()
        .then(function () {
          $state.go(defaultState);

          return LoggedUser.getUser();
        });
    };
  }
}());
