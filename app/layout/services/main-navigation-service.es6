(function () {
  'use strict';

  class MainNavigation {
    constructor() {
      this.items = [];
    }

    get() {
      return {
        getItems: this.getItems
      };
    }

    getItems() {
      return this.items;
    }

    addItem(item) {
      this.items.push(item);
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
