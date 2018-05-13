var app = angular.module('ectdApp')
.controller('DossierDetailsController', ['$stateParams', 'DossierService', 'NotificationService', 
    function($stateParams, DossierService, notifications){

        var self = this;
        self.dossierId = $stateParams.dossierId;
        self.dossier = 'test';

        DossierService.getDossierById(this.dossierId, function(err, result){
            if(err){
                notifications.addAlert('Error in retrieving dossier data. Please contact administartor.', 'danger');
            }
            else {
                console.log(result.data);
                self.dossier = JSON.stringify(result.data);
            }
        });
}]);