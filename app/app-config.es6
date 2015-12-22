(function () {
  'use strict';

  angular
    .module('redmineDesktop')
    .config(config);

  function config(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('redmineDesktop');
  }
}());
