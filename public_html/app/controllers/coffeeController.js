angular.module('coffeeCtrl', ['userService'])
  .controller('coffeeController', function(Coffee) {
    var vm = this;

    vm.processing = true;

    Coffee.all()
      .success(function(data) {
        vm.processing = false;
        vm.coffees = data;
      });
  })