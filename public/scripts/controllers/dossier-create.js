var app = angular.module('ectdApp')
.controller('DossierCreateController', [function(){
    this.dosageForms = ['Tablets', 'Capsules', 'Syrup', 'Injection'];

    this.dossier = {
        drugSubstances: [{}]
    };

    this.addDrugSubstance = function(){
        this.dossier.drugSubstances.push({});
    };
    this.submitNewDossier = function(){

    };
}]);