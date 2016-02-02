angular.module('pingpong.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Ping', function($http) {
  // Might use a resource here that returns a JSON array
  var response;

  var api_endpoint = '[INFORM YOUR API ENDPOINT HERE TO TEST]';

  return {
    doPing: function() {
      return $http.get(api_endpoint).then(function(data){
          console.log(data.data);
          response = data.data;
          return response;
      });
    }
  }
});