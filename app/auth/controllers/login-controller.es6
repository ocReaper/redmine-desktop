(function () {
  'use strict';

  class LoginCtrl {
    /* @ngInject */
    constructor(localStorageService, visor, LoggedUser) {
      let vm = this;

      vm.localStorageService = localStorageService;
      vm.visor = visor;
      vm.LoggedUser = LoggedUser;
      vm.user = {};
    }

    submit() {
      let vm = this;

      vm.localStorageService.set('loggedUserRedmineApiKey', vm.user.key);
      vm.localStorageService.set('loggedUserRedmineApiHost', vm.user.host);
      vm.LoggedUser.setUserByToken();
      vm.visor.setAuthenticated(vm.user);
    }
  }

  /**
   * @ngdoc object
   * @name auth.controller:LoginCtrl
   *
   * @description
   *
   */
  angular
    .module('auth')
    .controller('LoginCtrl', LoginCtrl);
}());
