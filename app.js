console.log("sanity check");

angular.module('campApp', ['ngRoute'])
       .config(config);


////////////
// ROUTES //
////////////


config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider //below is dot chaining
    .when('/', {  //when on this url go to the below url and use these controllers
      templateUrl: 'templates/home.html',  // this "partial" html file
      controller: 'HomeController',         // uses this controller
      controllerAs: 'homeCtrl'              // with this name
    })
    // .when('/about', {
    //   templateUrl: 'templates/about.html',
    //   controller: 'AboutController',
    //   controllerAs: 'aboutCtrl'
    // })
    // .when('/login', {
    //   templateUrl: 'templates/books/show.html',
    //   controller: 'BooksShowController',
    //   controllerAs: 'booksShowCtrl'
    // })
    .otherwise({  //if unrecoginized URL, set back to index
      redirectTo: '/'
    });



  $locationProvider //deals w/ urls, telling location provider it should be using HTML5 mode.
  .html5Mode({
    enabled: true,
    requireBase: false
  });
}
