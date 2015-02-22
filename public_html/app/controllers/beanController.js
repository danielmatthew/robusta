angular.module('beanCtrl', ['beanService'])
  .controller('beanController', function(Bean) {
    var that = this;

    this.beans = {};

    Bean.all()
      .success(function(data) {
        that.beans = data;
      });
  });
