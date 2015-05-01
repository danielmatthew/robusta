angular.module('app.routes', ['ngRoute'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/pages/beans/all.html'
        // templateUrl: '/'
      })

      .when('/beans', {
        templateUrl: 'app/views/pages/beans/all.html'
      })

      .when('/beans/add', {
        templateUrl: 'app/views/pages/beans/add.html',
        controller: 'beanCreateController',
        controllerAs: 'bean'
      })

      .when('/coffees', {
        templateUrl: '/app/views/pages/coffees/all.html'
      })

      .when('/coffees/add', {
        templateUrl: '/app/views/pages/coffees/add.html'
      });

      // .when('/login', {
      //   templateUrl: 'app/views/pages/login.html',
      //   controller: 'mainController',
      //   controllerAs: 'login'
      // })
      //
      // .when('/users', {
      //   templateUrl: 'app/views/pages/users/all.html',
      //   controller: 'userController',
      //   controllerAs: 'user'
      // })
      //
      // .when('/users/create', {
      //   templateUrl: 'app/views/pages/users/single.html',
      //   controller: 'userCreateController',
      //   controllerAs: 'user'
      // })
      //
      // .when('/users/:user_id', {
      //   templateUrl: 'app/views/pages/users/single.html',
      //   controller: 'userEditController',
      //   controllerAs: 'user'
      // });

      $locationProvider.html5Mode(true);
  });
