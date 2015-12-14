(function () {
  'use strict';

  class HomeCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'HomeCtrl';
    }
  }

  /**
   * @ngdoc object
   * @name home.controller:HomeCtrl
   *
   * @description
   *
   */
  angular
    .module('home')
    .controller('HomeCtrl', HomeCtrl);
}());
