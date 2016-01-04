(function () {
  'use strict';

  class MainNavigation {
    const items = [];

    constructor() {
    }

    get() {
      return 'MainNavigation';
    }

    getItems() {
      return items;
    }
  }

  /**
   * @ngdoc service
   * @name layout.service:MainNavigation
   *
   * @description
   *
   */
  angular
    .module('layout')
    .service('MainNavigation', MainNavigation);
}());
