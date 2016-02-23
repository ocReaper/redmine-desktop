(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name issues.factory:Issue
   *
   * @description
   *
   */
  angular
    .module('issues')
    .factory('Issue', Issue);

  function Issue(RmResource) {
    return RmResource('issue', 'issues/:id.json?include=children,attachments,relations,changesets,journals,watchers', {id: '@id'});
  }
}());
