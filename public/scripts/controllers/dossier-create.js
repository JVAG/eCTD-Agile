var app = angular.module('ectdApp')
.controller('DossierCreateController', [function(){
    this.dosageForms = ['Tablets', 'Capsules', 'Syrup', 'Injection'];
    this.today = new Date();
    this.dossier = {
        drugSubstances: [{}]
    };

    this.addDrugSubstance = function(){
        this.dossier.drugSubstances.push({});
    };
    this.submitNewDossier = function(){
        console.log(this.dossier);
        
    };
}]);