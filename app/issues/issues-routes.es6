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
      })
      .state('issue', {
        url: '/issues/:id',
        templateUrl: 'issues/views/issue.tpl.html',
        controller: 'IssueCtrl',
        controllerAs: 'issue',
        resolve: {
          issue: function (Issue, $stateParams, $q) {
            var id = $stateParams.id;

            if (!id) {
              return $q.reject(null);
            }
            return Issue
              .get({id: id})
              .$promise
              .then(function (response) {
                return response.issue;
              });
          }
        }
      });
  }
}());
