var app = angular.module('ectdApp')
.controller('DossierDetailsController', ['$stateParams', 'DossierService', 'NotificationService', 
    function($stateParams, DossierService, notifications){

        var self = this;
        self.dossierId = $stateParams.dossierId;
        self.title = 'Loading Dossier Details...';
        self.folderTree = {};

        DossierService.getDossierById(this.dossierId, function(err, result){
            if(err){
                notifications.addAlert('Error in retrieving dossier data. Please contact administartor.', 'danger');
            }
            else {
                console.log(result.folderTree);
                self.title = createTitle(result.dossier);
                self.folderTree = result.folderTree;
                self.dossier = result.dossier;
            }
        });

        function createTitle(dossier){
            return dossier.ProductBrandName + "(" + dossier.ProductGenericName + ")";
        }
}]);