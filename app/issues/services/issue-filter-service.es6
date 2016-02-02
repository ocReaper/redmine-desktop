(function () {
  'use strict';

  class IssueFilter {
    constructor(_) {
      this._ = _;
      this.activeFilters = [{limit: 999}];
    }

    getFilters() {
      return this.activeFilters;
    }

    addFilter(filter) {
      this.activeFilters = _.union(this.activeFilters, [filter]);
    }

    removeFilter(filter) {
      this._.remove(this.activeFilters, function (n) {
        return n === filter;
      });
    }
  }

  /**
   * @ngdoc service
   * @name issues.service:IssueFilter
   *
   * @description
   *
   */
  angular
    .module('issues')
    .service('IssueFilter', IssueFilter);
}());
