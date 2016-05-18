(function(){
  'use strict';
  angular.module('phoneDetailApp',[
      'ngRoute',
      'myFilter',
      'myServices'
  ])
    .controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'phoneService',//'$http',
    //   function($scope, $routeParams, $http) {  使用http访问json文件内容
    //     $http.get($routeParams.phoneId + '.json').success(function(data) {
    //     $scope.phone = data;
    //     $scope.mainImageUrl = data.images[0];
    //   });
      function($scope, $routeParams, phoneService) {
         $scope.phone = phoneService.get({phoneId: $routeParams.phoneId}, 
           function(phoneService) {
             $scope.mainImageUrl = phoneService.images[0];
      });

       $scope.setMainImage = function(imageUrl) {
         $scope.mainImageUrl = imageUrl;
       };
  }]);
})()
