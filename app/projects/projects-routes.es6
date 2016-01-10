(function () {
  'use strict';

  angular
    .module('projects')
    .config(config);

  function config($stateProvider, authenticatedOnly) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        templateUrl: 'projects/views/projects.tpl.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects',
        restrict: authenticatedOnly
      });
  }
}());
