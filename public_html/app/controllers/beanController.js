angular.module('beanCtrl', ['beanService'])
  .controller('beanController', function(Bean) {
    var that = this;

    this.beans = {};

    Bean.all()
      .success(function(data) {
        that.beans = data;
      });

    that.deleteBean = function(id) {
      Bean.delete(id)
        .success(function(data) {
          Bean.all()
            .success(function(data){
              that.beans = data;
            });
        });
    }
  })

  .controller('beanCreateController', function(Bean) {
    var vm = this;

    vm.type = 'create';

    vm.saveBean = function() {
      vm.processing = true;
      vm.message = '';

      Bean.create(vm.beanData)
        .success(function(data) {
          vm.processing = false;
          vm.beanData = {};
          vm.message = data.message;
        });
    };
  })

  .controller('beanEditController', function($routeParams, Bean) {
    var vm = this;

    vm.type = 'edit';

    Bean.get($routeParams.bean_id)
      .success(function(data) {
        vm.beanData = data;
      });

    vm.saveBean = function() {
      vm.processing = true;
      vm.message = '';

      Bean.update($routeParams.bean_id, vm.beanData)
        .success(function(data) {
          vm.processing = false;

          vm.beanData = {};

          vm.message = data.message;
        });
    };
  });
