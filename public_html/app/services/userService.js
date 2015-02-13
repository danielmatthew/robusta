angular.module('userService', [])
  .factory('User', function($http) {

    var userFac = {};

    // Get single coffee
    userFactory.get = function(id) {
      return $http.get('/api/users/' + id);
    };

    // Get all coffees
    userFactory.all = function() {
      return $http.get('/api/users/');
    };

    // Create a coffee
    userFactory.create = function(data) {
      return $http.post('/api/users/', data);
    };

    // Update coffee
    userFactory.update = function(id, data) {
      return $http.put('/api/users/' + id, data);
    };

    // Delete coffee
    userFactory.delete = function(id) {
      return $http.delete('/api/users/' + id);
    };

    return userFactory;
  });
