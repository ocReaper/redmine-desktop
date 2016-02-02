(function () {
  'use strict';

  class IssueCtrl {
    constructor(issue) {
      let vm = this;

      vm.issue = issue;
    }
  }

  /**
   * @ngdoc object
   * @name issues.controller:IssueCtrl
   *
   * @description
   *
   */
  angular
    .module('issues')
    .controller('IssueCtrl', IssueCtrl);
}());
