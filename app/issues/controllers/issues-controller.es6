(function () {
  'use strict';

  class IssuesCtrl {
    constructor(issues, $state) {
      let vm = this;

      vm.getIssues = function getIssues() {
        return issues;
      };

      vm.openIssue = function openIssue(id) {
        $state.go('issue', {id: id});
      };
    }
  }

  /**
   * @ngdoc object
   * @name issues.controller:IssuesCtrl
   *
   * @description
   *
   */
  angular
    .module('issues')
    .controller('IssuesCtrl', IssuesCtrl);
}());
