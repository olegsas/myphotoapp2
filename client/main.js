var myApp = angular.module('myApp', ['ngRoute']);

myApp.config([
  '$routeProvider',
  '$locationProvider',
  function ($routeProvider, $locationProvider) {
  //console.log("restricted = "+restricted);
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home.html',
      controller: 'mainController',
      access: {restricted: true}
    })
    .when('/login', {
      templateUrl: 'templates/login.html',
      controller: 'loginController',
      access: {restricted: false}
    })
    .when('/logout', {
      controller: 'logoutController',
      access: {restricted: true}
    })
    .when('/register', {
      templateUrl: 'templates/register.html',
      controller: 'registerController',
      access: {restricted: false}
    })
    .when('/one', {
      template: '<h1>This is page one!</h1>',
      access: {restricted: false}
    })
    .when('/two', {
      template: '<h1>This is page two!</h1>',
      access: {restricted: true}
    });
    //.otherwise({
    //  redirectTo: '/'
    //});

    // Add HTML5 History API support
    $locationProvider.html5Mode(true);
  }
]);


myApp.run(function ($rootScope, $location, $route, AuthService) {
  $rootScope.$on('$routeChangeStart',
  function (event, next, current) {
    AuthService.getUserStatus()
    .then(function(data){
      console.log("")
      console.log("next.access.restricted = "+next.access.restricted);
      console.log("next = "+next);
      console.log("data = "+data);
      if (next.access.restricted && !AuthService.isLoggedIn()) {
        console.log("reroute - not logged in");
        $location.path('/login');
        $route.reload();
      }
    });
  });
});