angular.module('campApp', ['ngRoute'])
       .config(config);


////////////
// ROUTES //
////////////


config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider //below is dot chaining
    .when('/', {  //when on this url go to the below url and use these controllers
      templateUrl: 'templates/books/index.html',  // this "partial" html file
      controller: 'HomeController',         // uses this controller
      controllerAs: 'homeCtrl'              // with this name
    })




  $locationProvider //deals w/ urls, telling location provider it should be using HTML5 mode.
  .html5Mode({
    enabled: true,
    requireBase: false
  });
}
