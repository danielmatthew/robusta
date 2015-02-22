// angular.module('coffeeCtrl', ['coffeeService'])
//   .controller('coffeeController', function(Coffee) {
//     // var vm = this;
//     //
//     // vm.processing = true;
//     //
//     // Coffee.all()
//     //   .success(function(data) {
//     //     vm.processing = false;
//     //     vm.coffees = data;
//     //   });
// });

angular.module('coffeeCtrl', ['coffeeService'])
  .controller('coffeeController', function(Coffee) {
    var that = this;

    this.data = 'Hello';
    this.coffees = {};

    Coffee.all()
      .success(function(data) {
        that.coffees = data;
      });
  });
