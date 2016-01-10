(function () {
  'use strict';

  class ProjectsCtrl {
    constructor() {
      let vm = this;
      vm.ctrlName = 'ProjectsCtrl';
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
