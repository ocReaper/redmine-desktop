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
      controller(MainNavigation, LoggedUser, _, visor, localStorageService, $rootScope, $state) {
        let vm = this;

        vm.getCurrentUserName = function getCurrentUserName() {
          let user = LoggedUser.getUser();

          if (_.isNull(user)) {
            return '';
          }

          return user.firstname + ' ' + user.lastname;
        };

        vm.logOut = function logOut() {
          localStorageService.remove('loggedUserRedmineApiKey');
          localStorageService.remove('loggedUserRedmineApiHost');
          LoggedUser.removeUser();
          $rootScope.user = undefined;
          visor.setUnauthenticated();
          $state.go('login');
        };

        vm.getMenuItems = function getMenuItems() {
          return MainNavigation.getItems();
        };
      }
    };
  }
}());
