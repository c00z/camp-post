console.log("sanity home check");
angular.module('campApp')
  .controller('HomeController', HomeController);

HomeController.$inject=['$http','$routeParams', '$location'];
function HomeController($http, $routeParams, $location) {


}
