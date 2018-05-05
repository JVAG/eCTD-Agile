var app = angular.module('ectdApp')
.controller('DossierCreateController', ['$state', 'DossierService', 'NotificationService', function($state, DossierService, notifications){
    this.dosageForms = ['Tablets', 'Capsules', 'Syrup', 'Injection'];
    this.regions = ['US'];
    this.applicationTypes = ['DMF'];
    this.versions = ['3.2'];
    this.today = new Date();
    this.dossier = {
        drugSubstances: [{}],
        region: this.regions[0],
        applicationType: this.applicationTypes[0],
        version: this.versions[0]
    };

    this.addDrugSubstance = function(){
        this.dossier.drugSubstances.push({});
    };
    this.removeDrugSubstance = function(index){
        this.dossier.drugSubstances.splice(index, 1); 
    }
    this.submitNewDossier = function(){
        this.dossier = DossierService.setDateCreated(this.dossier);
        this.dossier = DossierService.setDateModified(this.dossier);
        this.dossier = DossierService.setOwner(this.dossier);
        this.dossier = DossierService.addSequence(this.dossier);
        DossierService.createNewDossier(this.dossier, function(err, data){
            if(err){
                notifications.addAlert('Error in creating new dossier. Please contact administartor.', 'danger');
            }
            else{
                console.log(data);
            }
        });
    };
}]);