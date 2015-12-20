(function () {
  'use strict';

  class LoginCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'LoginCtrl';
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
