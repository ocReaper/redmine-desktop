(function () {
  'use strict';

  angular
    .module('issues')
    .config(config);

  function config($stateProvider, authenticatedOnly) {
    $stateProvider
      .state('issues', {
        url: '/issues',
        templateUrl: 'issues/views/issues.tpl.html',
        controller: 'IssuesCtrl',
        controllerAs: 'issues',
        restrict: authenticatedOnly,
        resolve: {
          issues: function (Issue, IssueFilter, _) {
            let trueParams = _.reduce(IssueFilter.getFilters(), function (memo, current) {
              return _.extend(memo, current)
            }, {});

            return Issue
              .get(trueParams)
              .$promise
              .then(function (response) {
                return response.issues;
              });
          }
        }
      });
  }
}());
