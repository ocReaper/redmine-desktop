(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name projects.factory:Project
   *
   * @description
   *
   */
  angular
    .module('projects')
    .factory('Project', Project);

  function Project(RmResource) {
    return RmResource('project', 'projects/:id.json', {id: '@id'});
  }
}());
