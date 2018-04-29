var app = angular.module('ectdApp')
.controller('DossierDetailsController', ['$stateParams', function($stateParams){
    this.title = "Dossier Details View";
    this.dossierId = $stateParams.dossierId;
}]);