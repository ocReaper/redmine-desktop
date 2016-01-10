(function () {
  'use strict';

  /* @ngdoc object
   * @name projects
   * @description
   *
   */
  angular
    .module('projects', [
      'ui.router'
    ])
    .run(addToMainNavigation);

  function addToMainNavigation(MainNavigation) {
    MainNavigation.addItem({
      title: 'Projects',
      state: 'projects'
    });
  }
}());
