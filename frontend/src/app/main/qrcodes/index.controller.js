(function() {
  'use strict';

  angular
    .module('frontend')
    .controller('IndexController', IndexController);

  /** @ngInject */
  function IndexController($timeout, webDevTec) {
    var vm = this;

    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1461477054391;
    // vm.showToastr = showToastr;

    
    getWebDevTec();

   
    function getWebDevTec() {
      vm.dinning = webDevTec.getQrlist();

      // angular.forEach(vm.awesomeThings, function(awesomeThing) {
      //   awesomeThing.rank = Math.random();
      // });
    }
  }
})();
