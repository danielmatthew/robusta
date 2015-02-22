angular.module('beanService', [])
  .factory('Bean', function($http) {

    var beanFactory = {};

    // Get single bean
    beanFactory.get = function(id) {
      return $http.get('/api/beans/' + id);
    };

    // Get all beans
    beanFactory.all = function() {
      return $http.get('/api/beans/');
    };

    // Create a bean
    beanFactory.create = function(data) {
      return $http.post('/api/beans/', data);
    };

    // Update bean
    beanFactory.update = function(id, data) {
      return $http.put('/api/beans/' + id, data);
    };

    // Delete bean
    beanFactory.delete = function(id) {
      return $http.delete('/api/beans/' + id);
    };

    return beanFactory;
  });
