(function () {
  'use strict';

  class ProjectsCtrl {
    constructor(Project) {
      let vm = this;

      vm.Project = Project;
      vm.projects = [];

      vm.Project
        .get()
        .$promise
        .then(function (response) {
          vm.projects = response.projects;
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
