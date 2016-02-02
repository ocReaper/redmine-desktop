(function () {
  'use strict';

  /* @ngdoc object
   * @name issues
   * @description
   *
   */
  angular
    .module('issues', [
      'ui.router'
    ])
    .run(addToMainNavigation);

  function addToMainNavigation(MainNavigation) {
    MainNavigation.addItem({
      title: 'issues',
      state: 'issues'
    });
  }
}());
