(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name issues.factory:IssueStatus
   *
   * @description
   *
   */
  angular
    .module('issues')
    .factory('IssueStatus', IssueStatus);

  function IssueStatus(RmResource) {
    return RmResource('issueStatus', 'issue_statuses.json');
  }
}());
