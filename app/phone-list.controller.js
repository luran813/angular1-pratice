
(function () {
  "use strict";

  angular.module('phonecatApp')
    // 1.controller('PhoneListCtrl', function ($scope) {
    //   $scope.name = "World";
    //   $scope.phones = [
    //     {
    //       'name': 'Nexus S',
    //       'snippet': 'Fast just got faster with Nexus S.',
    //       'age': 3
    //     },
    //     {
    //       'name': 'Motorola XOOM™ with Wi-Fi',
    //       'snippet': 'The Next, Next Generation tablet.',
    //       'age': 1
    //     },
    //     {
    //       'name': 'MOTOROLA XOOM™',
    //       'snippet': 'The Next, Next Generation tablet.',
    //       'age': 2
    //     }
    //   ];
    //   $scope.orderProp = 'age';
    // });
    // 2 .controller('PhoneListCtrl', function ($scope, $http) {
    //   $scope.name = "World";
    //   $http.get('phones.json').success(function (data) {
    //     $scope.phones = data;
    //   });    
    //   $scope.orderProp = 'age';
    // });
    .controller('PhoneListCtrl', ['$scope','phoneService',function($scope, phoneService){
      $scope.name = "World";
      // $http.get('phones.json').success(function (data) {
      //   $scope.phones = data;
      // });
      $scope.phones = phoneService.query();
      $scope.orderProp = 'age';
    }]);
    
})()