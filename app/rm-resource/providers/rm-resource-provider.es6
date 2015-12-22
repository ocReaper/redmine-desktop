(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name rmResource.provider:RmResource
   *
   * @description
   *
   */
  angular
    .module('rmResource')
    .provider('RmResource', RmResource);

  function RmResource() {
    let baseUrl = '';

    return {
      setBaseUrl: setBaseUrl,
      $get: get
    };

    function setBaseUrl(newBaseUrl) {
      baseUrl = newBaseUrl;
    }

    function get($resource, _) {
      function rmResourceBase(url, paramDefaults, actions) {
        paramDefaults = paramDefaults || {};
        actions = actions || {};
        actions = addBaseUrlToActions(actions);

        return $resource(baseUrl + url, paramDefaults, actions);

        function addBaseUrlToActions(rawActions) {
          _.forEach(rawActions, function (action) {
            if (_.has(action, 'url') && !_.startsWith(action.url, baseUrl)) {
              action.url = baseUrl + action.url;
            }
          });
          return rawActions;
        }
      }

      return rmResourceBase;
    }
  }
}());
