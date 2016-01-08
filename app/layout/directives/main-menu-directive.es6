(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name layout.directive:mainMenu
   * @restrict EA
   * @element
   *
   * @description
   *
   * @example
   <example module="layout">
   <file name="index.html">
   <main-menu></main-menu>
   </file>
   </example>
   *
   */
  angular
    .module('layout')
    .directive('mainMenu', mainMenu);

  function mainMenu() {
    return {
      restrict: 'EA',
      scope: {},
      templateUrl: 'layout/directives/main-menu-directive.tpl.html',
      replace: false,
      controllerAs: 'mainMenu',
      controller(MainNavigation) {
        let vm = this;

        vm.getMenuItems = function getMenuItems() {
          return MainNavigation.getItems();
        };
      },
      link(scope, element, attrs) {
        /* jshint unused:false */
        /* eslint "no-unused-vars": [2, {"args": "none"}] */
      }
    };
  }
}());
