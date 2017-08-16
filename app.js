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
                templateUrl: 'templates/events.html',
                controller: 'homeController'
            })
            .when('/contact', {
                templateUrl: 'templates/contact.html',
                controller: 'homeController'
            })
            .when('/volunteer', {
                templateUrl: 'templates/volunteer.html',
                controller: 'homeController'
            })
            .when('/tickets', {
                templateUrl: 'templates/tickets.html',
                controller: 'homeController'
            })
            .when('/audio', {
                templateUrl: 'templates/audio.html',
                controller: 'homeController'
            })
            .when('/video', {
                templateUrl: 'templates/video.html',
                controller: 'homeController'
            })
            .when('/privacy', {
                templateUrl: 'templates/privacy.html',
                controller: 'homeController'
            })
            .when('/press', {
                templateUrl: 'templates/press.html',
                controller: 'homeController'
            })
            .when('/2013', {
                templateUrl: 'templates/2013.html',
                controller: 'homeController'
            })
            .when('/2014', {
                templateUrl: 'templates/2014.html',
                controller: 'homeController'
            })
            .when('/2015', {
                templateUrl: 'templates/2015.html',
                controller: 'homeController'
            })
            .when('/2017', {
                templateUrl: 'templates/2017.html',
                controller: 'homeController'
            })
            .when('/terms', {
                templateUrl: 'templates/terms.html',
                controller: 'homeController'
            })
            .when('/sponsorship', {
                templateUrl: 'templates/sponsorship.html',
                controller: 'homeController'
            })
            .when('/images', {
                templateUrl: 'templates/images.html',
                controller: 'homeController'
            });
    });
