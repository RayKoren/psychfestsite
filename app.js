angular.module('psychFest', [
      'ui.router',
      'ngRoute',
      'app.directives',
      'app.controllers'
    ])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })
            .when('/events', {
                templateUrl : 'templates/events.html',
                controller  : 'homeController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'templates/contact.html',
                controller  : 'homeController'
            });
   
    });

