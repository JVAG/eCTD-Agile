var app = angular.module('ectdApp', ['ui.router', 'ui.bootstrap', 'ngJsTree']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/invalid');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'views/home.html',
            controller: 'HomeController as homectrl'
        })
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardController as dashctrl'
        })
        .state('dossier', {
            url: '/dossier/:dossierId',
            templateUrl: 'views/dossier-details.html',
            controller: "DossierDetailsController as ddctrl"
        })
        .state('create', {
            url: '/create',
            templateUrl: 'views/dossier-create.html',
            controller: "DossierCreateController as dcctrl"
        })
        .state('validate', {
            url: '/validate',
            template: '<div class="well"><h4 class="text-primary">Validation page is under construction</h4></div>',
        })
        .state('admin', {
            url: '/admin',
            template: '<div class="well"><h4 class="text-primary">Admin page is under construction</h4></div>',
        })
        .state('profile', {
            url: '/profile',
            template: '<div class="well"><h4 class="text-primary">Profile page is under construction</h4></div>',
        })
        .state('invalid', {
            url: '/invalid',
            template: '<div class="well"><h4 class="text-danger">Error: Invalid URL</h4></div>'
        })
        .state('error', {
            url: '/error',
            template: '<h2 class="text-danger">{{error}}</h2>',
            controller: function($scope, $stateParams){
                $scope.error = "error of Snehal";
                console.log($stateParams);
            },
            params: {
                'name': 'some default', 
            }
        })
        ;
}]);
app.controller('NotificationController', ['$scope', 'NotificationService', function($scope, notifications){
    $scope.alerts = notifications.alerts;
    $scope.addAlert = function(){
        notifications.addAlert();
    };
    $scope.closeAlert = function(index){
        notifications.closeAlert();
    };
}]);