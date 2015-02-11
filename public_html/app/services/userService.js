angular.module('userService', [])
  .factory('Coffee', function($http) {
    
    var coffeeFactory = {};

    // Get single coffee
    coffeeFactory.get = function(id) {
      return $http.get('/api/coffees/' + id);
    };

    // Get all coffees
    coffeeFactory.all = function() {
      return $http.get('/api/coffees');
    };

    // Create a coffee
    coffeeFactory.create = function(data) {
      return $http.post('/api/coffees', data);
    };

    // Update coffee
    coffeeFactory.update = function(id, data) {
      return $http.put('/api/coffees' + id, data);
    };

    // Delete coffee
    coffeeFactory.delete = function(id) {
      return $http.delete('/api/coffees' + id);
    };

    return coffeeFactory;
  });