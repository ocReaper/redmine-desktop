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
        restrict: authenticatedOnly,
        resolve: {
          projects: function (Project, _) {
            return Project
              .get({limit: 999})
              .$promise
              .then(function (response) {
                let projects = response.projects;

                return _.filter(projects, function (n) {
                  return _.isUndefined(n.status) || n.status === 1;
                });
              });
          }
        }
      });
  }
}());
