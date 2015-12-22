(function () {
  'use strict';

  class LoginCtrl {
    /* @ngInject */
    constructor(localStorageService, visor) {
      let vm = this;

      vm.localStorageService = localStorageService;
      vm.visor = visor;
      vm.user = {};
    }

    submit() {
      let vm = this;

      vm.localStorageService.set('loggedUserRedmineApiKey', vm.user.key);
      vm.localStorageService.set('loggedUserRedmineApiHost', vm.user.host);
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
