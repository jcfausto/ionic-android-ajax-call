angular.module('pingpong.controllers', [])

.controller('DashCtrl', function($scope, Ping) {    
    Ping.doPing().then(function(data){
      $scope.response = data;
    });
})