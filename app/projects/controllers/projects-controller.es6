(function () {
  'use strict';

  class ProjectsCtrl {
    constructor(Project) {
      let vm = this;

      vm.Project = Project;
      vm.projects = [];

      vm.Project
        .get({limit: 999})
        .$promise
        .then(function (response) {
          let projects = response.projects;

          vm.projects = _.filter(projects, function (n) {
            return _.isUndefined(n.status) || n.status === 1;
          });
        });
    }

    getProjects() {
      let vm = this;

      return vm.projects;
    }
  }

  /**
   * @ngdoc object
   * @name projects.controller:ProjectsCtrl
   *
   * @description
   *
   */
  angular
    .module('projects')
    .controller('ProjectsCtrl', ProjectsCtrl);
}());
