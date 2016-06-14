(function(){

    var application = angular.module('boilerplate', ['controllers', 'services', 'directives', 'ui.router', 'ngCookies']);
    angular.module('controllers', []);
    angular.module('services', []);
    angular.module('directives', []);

    //var apiUrl = 'http://manage.appscentral.co.uk/api/v1/';

    /* Routes */
    application.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
    {
        $stateProvider
            .state('/', {
                url         : "",
                templateUrl : "../templates/home.html",
                controller  : 'DefaultController'
            })
            .state('schools', {
                url         : "",
                templateUrl : "./templates/school/index.html",
                controller  : 'SchoolController'
            })
            .state('schools-detail', {
                url         : "/schools/:id",
                templateUrl : "./templates/school/detail.html",
                controller  : 'SchoolViewController'
            })
            .state('about', {
                url         : "/about",
                templateUrl : "./templates/about.html",
                controller  : 'AboutController'
            })
            .state('contact', {
                url         : "/contact",
                templateUrl : "./templates/contact.html",
                controller  : 'ContactController'
            })
            .state('dropdown-action', {
                url         : "/dropdown/action",
                templateUrl : "./templates/dropdown/action.html",
                controller  : 'ActionController'
            })
            .state('dropdown-other-action', {
                url         : "/dropdown/other-action",
                templateUrl : "./templates/dropdown/other-action.html",
                controller  : 'ActionController'
            });
    }]);

})();

