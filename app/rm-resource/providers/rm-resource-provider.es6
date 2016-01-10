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

    function get($resource, _, $cacheFactory, $log) {
      function rmResourceBase(name, url, paramDefaults, actions) {
        var resource,
          cache = $cacheFactory(name),
          clearCacheInterceptor = getInterceptors();

        paramDefaults = paramDefaults || {};
        actions = actions || {};
        actions = _.defaultsDeep(actions, {
          query: {method: 'GET', cache: cache, isArray: true},
          get: {method: 'GET', cache: cache},
          save: {method: 'POST', interceptor: clearCacheInterceptor},
          update: {method: 'PUT', interceptor: clearCacheInterceptor},
          remove: {method: 'DELETE', interceptor: clearCacheInterceptor},
          delete: {method: 'DELETE', interceptor: clearCacheInterceptor}
        });
        resource = getResource();
        resource = addResourceMethods(resource);

        return resource;

        function getResource(params) {
          params = params || {};
          params.parentUrl = params.parentUrl || '';
          actions = addBaseUrlToActions(actions);

          return $resource(baseUrl + params.parentUrl + url, paramDefaults, actions);
        }

        function addResourceMethods(resourceWithoutMethods) {
          return angular.extend(resourceWithoutMethods, {
            getAsSub: function getAsSub(parentUrl) {
              /**
               * we need to merge resourceWithoutMethods prototype with the new sub-resourceWithoutMethods
               * this will add methods, defined in resourceWithoutMethods factory to the sub-resourceWithoutMethods
               */
              var newResource = getResource({parentUrl: parentUrl});
              _.defaults(newResource.prototype, resourceWithoutMethods.prototype);
              return newResource;
            }
          });
        }

        function addBaseUrlToActions(rawActions) {
          _.forEach(rawActions, function (action) {
            if (_.has(action, 'url') && !_.startsWith(action.url, baseUrl)) {
              action.url = baseUrl + action.url;
            }
          });
          return rawActions;
        }

        function getInterceptors() {
          return {
            response: function (response) {
              clearCache(response.config.url);
              return response;
            },
            responseError: function (response) {
              clearCache(response.config.url);
              return response;
            }
          };
        }

        function clearCache(cacheUrl) {
          cache.remove(cacheUrl);
          $log.debug('Cache removed for ', cacheUrl);
        }
      }

      return rmResourceBase;
    }
  }
}());
