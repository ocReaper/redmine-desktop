(function () {
  'use strict';

  class IssueManagerCtrl {
    constructor(issueStatuses) {
      let vm = this;

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
