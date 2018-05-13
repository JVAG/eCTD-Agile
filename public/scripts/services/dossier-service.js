var app = angular.module('ectdApp')
    .service('DossierService', ['$http', function($http){
        var dossier = {};
        this.setDossier = function(pDossier){
            dossier = pDossier;
        }
        this.setOwner = function(dossier, user = "Currently Logged User"){
            dossier.Owner = user;
            return dossier;
        };
        this.addSequence = function(dossier, newSequence){
            if(!newSequence){
                newSequence = { Name: '0000', Description:'Inital Submission' }
            }
            if(!dossier.sequences){
                dossier.Sequences = [newSequence];
            }
            else {
                dossier.sequences.push(newSequence);
            }
            return dossier;
        }
        this.createNewDossier = function(dossier, callback){
            console.log('DossierService createNewDossier: ', dossier);
            var url = "/dossier";
            $http.post(url, dossier).then(
                function(data) {
                    console.log(data);
                    callback(null, data);
                }, 
                function(error) {
                    console.error(error.data);
                    callback(error);
                });
        };
        this.getAllDossiers = function(callback){
            console.log('In DossierService.getAllDossiers');
            $http.get('/dossier').then(
                function(data) {
                    console.log(data);
                    callback(null, data);
                }, 
                function(error) {
                    console.error('Error: ', error);
                    callback(error);
                });
        };

        this.getDossierById = function(callback){
            console.log('In DossierService.getDossierById');
            $http.get('/dossier/123').then(
                function(data) {
                    console.log(data);
                    callback(null, data);
                }, 
                function(error) {
                    console.error(error.status, error.statusText);
                    callback(error);
                });
        };
    }]);