var app = angular.module('ectdApp', ['ui.router', 'ui.bootstrap']);
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/invalid');
    $stateProvider
        .state('home', {
            url: '/home',
            template: '<h2>All Dossiers View</h2>',
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
        .state('invalid', {
            url: '/invalid',
            template: '<h2 class="text-danger">Error: Invalid URL</h2>'
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