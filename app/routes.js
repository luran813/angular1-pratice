(function () {
  'use strict';
  angular
    .module('myRoute',
    ['ngRoute']
  )
  .config(config);
  
  function config($routeProvider){
    $routeProvider
      .when('/list', {
        templateUrl: 'phone-list.html',
        controller: 'PhoneListCtrl'
      })
      .when('/detail/:phoneId', {
        templateUrl: 'phone-detail.html',
        controller: 'PhoneDetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
    });
  }
})()
