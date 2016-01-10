(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name loggedUser.factory:User
   *
   * @description
   *
   */
  angular
    .module('loggedUser')
    .factory('User', User);

  function User(RmResource) {
    let url = 'users/';

    return RmResource('user', url + ':id.json', {id: '@id'},
      {
        me: {
          method: 'GET',
          cache: true,
          url: url + 'current.json'
        }
      });
  }
}());
