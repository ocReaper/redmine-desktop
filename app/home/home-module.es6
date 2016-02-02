(function () {
  'use strict';

  /* @ngdoc object
   * @name home
   * @description
   *
   */
  angular
    .module('home', [
      'ui.router'
    ])
    .run(addToMainNavigation);

  function addToMainNavigation(MainNavigation) {
    MainNavigation.addItem({
      title: 'Home',
      state: 'home'
    });
  }
}());
