(function () {
  'use strict';

  angular
    .module('redmineDesktop')
    .config(configLocalStorage)
    .config(configApi);

  function configLocalStorage(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('redmineDesktop');
  }

  function configApi(RmResourceProvider) {
    RmResourceProvider.setBaseUrl('https://redmine.y-collective.com/');
  }
}());
