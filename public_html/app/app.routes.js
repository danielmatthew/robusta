angular.module('app.routes', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/pages/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })

      .when('/coffees', {
        templateUrl: 'views/pages/coffees/all.html',
        controller: 'coffeeController',
        controllerAs: 'coffee'
      });

      $locationProvider.html5Mode(true);
  });