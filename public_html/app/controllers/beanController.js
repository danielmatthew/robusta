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
  });
