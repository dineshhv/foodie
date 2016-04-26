(function() {
  'use strict';

  angular
    .module('frontend')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/home/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      }) 
      .state('QRCodes', {
        url: '/QRCodes',
        templateUrl: 'app/main/qrcodes/index.html',
        controller: 'IndexController',
        controllerAs: 'qrcodes'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
