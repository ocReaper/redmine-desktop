(function () {
  'use strict';

  class IssueManagerCtrl {
    constructor(issue, issueStatuses) {
      let vm = this;

      vm.issue = issue;
      vm.issueStatuses = issueStatuses;
    }
  }

  /**
   * @ngdoc object
   * @name issues.controller:IssueManagerCtrl
   *
   * @description
   *
   */
  angular
    .module('issues')
    .controller('IssueManagerCtrl', IssueManagerCtrl);
}());
