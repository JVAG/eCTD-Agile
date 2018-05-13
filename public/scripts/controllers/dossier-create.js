var app = angular.module('ectdApp')
.controller('DossierCreateController', ['$state', 'DossierService', 'NotificationService', function($state, DossierService, notifications){
    this.dosageForms = ['Tablets', 'Capsules', 'Syrup', 'Injection'];
    this.regions = ['US'];
    this.applicationTypes = ['DMF'];
    this.versions = ['3.2'];
    this.today = new Date();
    this.dossier = {
        DrugSubstances: [{}],
        Region: this.regions[0],
        ApplicationType: this.applicationTypes[0],
        EctdVersion: this.versions[0],
        DosageForm: this.dosageForms[0]

        /* DEV MODE */
        ,DueDate: this.today
        ,AtcCode: 'abc123'
        ,Title: 'test'
        ,Applicant: 'Biznisss llc'
        ,ProductBrandName: 'tylonol'
        ,ProductGenericName: 'acetaphenomin'
        ,ProductManufacturer: 'walgreens equate'
    };

    this.addDrugSubstance = function(){
        this.dossier.DrugSubstances.push({});
    };
    this.removeDrugSubstance = function(index){
        this.dossier.DrugSubstances.splice(index, 1); 
    }
    this.submitNewDossier = function(){
        this.dossier = DossierService.setOwner(this.dossier);
        this.dossier = DossierService.addSequence(this.dossier);
        if(!this.dossier.DrugSubstances[0].Name && !this.dossier.DrugSubstances[0].Manufacturer){
            this.dossier.DrugSubstances.splice(0,1);
        }
        DossierService.createNewDossier(this.dossier, function(err, result){
            if(err && err.data && err.data.message){
                notifications.addAlert( err.data.message + ' Please contact administartor if error persists.', 'danger');
            }
            else if(err || !result || !result.data){
                notifications.addAlert('Error in creating new dossier. Please contact administartor.', 'danger');
            }
            else{
                $state.go('dossier', {dossierId: result.data});
            }
        });
    };
}]);