(function () {
  "use strict";
  
  angular
    .module('myServices', [
        'ngResource'
    ])
    .factory('phoneService', ['$resource',function($resource){
        return $resource(':phoneId.json', {}, {
        query: {
          method:'GET', params:{phoneId:'phones'}, isArray:true
        }
        });
    }]);
})()
