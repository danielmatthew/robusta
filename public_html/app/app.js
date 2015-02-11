// angular.module('routerApp', ['app.routes'])
//   .controller('mainController', function() {
//     var vm = this;

//     vm.bigMessage = 'A smooth sea never made a skilled sailor';
//   })

//   .controller('homeController', function() {
//     var vm = this;
//     vm.message = 'This is the home page';
//   })

//   .controller('aboutController', function() {
//     var vm = this;
//     vm.message = 'This is the about message';
//   })

//   .controller('contactController', function() {
//     var vm = this;
//     vm.message = 'Contact us!';
//   });

  angular.module('coffeeApp', [
      'app.routes',
      'mainController',
      'coffeeCtrl',
      'userService'
  ]);