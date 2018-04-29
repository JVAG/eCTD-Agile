var app = angular.module('ectdApp', ['ui.router']);
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
            controller: "DossierDetailsController as dctrl"
        })
        .state('create', {
            url: '/create',
            templateUrl: 'views/dossier-create.html',
            controller: ""
        })
        .state('invalid', {
            url: '/invalid',
            template: '<h2 class="text-danger">Error: Invalid URL</h2>'
        });
        ;
}]);