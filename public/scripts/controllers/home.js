var app = angular.module('ectdApp')
.controller('HomeController',['$log', 'DossierListService', 'NotificationService', function($log, Dossiers, Notifications){
    var self = this;
    Dossiers.getAllDossiers(function(err, dossierList){
        if(err){
            $log.error(err);
            Notifications.addAlert(err, 'danger');
        }
        else {
            console.log(dossierList);
            self.dossierList = dossierList;
        }
    });
    // self.select = function(dossier){
    //     console.log(dossier.Title + " selected");
    // }
}])
