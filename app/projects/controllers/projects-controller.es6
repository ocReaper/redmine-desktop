(function () {
  'use strict';

  class ProjectsCtrl {
    constructor($state, projects, IssueFilter) {
      let vm = this;

      vm.projects = projects;
      vm.$state = $state;
      vm.IssueFilter = IssueFilter;
    }

    getProjects() {
      let vm = this;

      return vm.projects;
    }

    filterIssuesByProjectId(id) {
      let vm = this;

      vm.IssueFilter.addFilter({project_id: id});
      vm.$state.go('issues');
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
