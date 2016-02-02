(function () {
  'use strict';

  class IssuesCtrl {
    constructor(issues) {
      let vm = this;

      vm.getIssues = function getIssues() {
        return issues;
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
