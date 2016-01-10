(function () {
  'use strict';

  class LoggedUser {
    constructor(User, $q) {
      this.User = User;
      this.$q = $q;
      this.user = null;
    }

    setUserByToken() {
      let deferredUser = this.$q.defer()
        , self = this;

      this.User
        .me()
        .$promise
        .then(function (result) {
          self.user = result.user;
          deferredUser.resolve();
        })
        .catch(deferredUser.reject);

      return deferredUser.promise;
    }

    removeUser() {
      this.user = null;
    }

    getUser() {
      return this.user;
    }

    get() {
      return {
        setUserByToken: this.setUserByToken,
        removeUser: this.removeUser,
        getUser: this.getUser
      }
    }
  }

  /**
   * @ngdoc service
   * @name loggedUser.service:LoggedUser
   *
   * @description
   *
   */
  angular
    .module('loggedUser')
    .service('LoggedUser', LoggedUser);
}());
