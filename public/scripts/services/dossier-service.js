var app = angular.module('ectdApp')
    .service('DossierService', ['$http', function($http){
        var dossier = {};
        this.setDossier = function(pDossier){
            dossier = pDossier;
        }
        this.setDateCreated = function(dossier){
            dossier.dateCreated = new Date();
            return dossier;
        };
        this.setDateModified = function(dossier){
            dossier.dateModified = new Date();
            return dossier;
        };
        this.setOwner = function(dossier, user = "Currently Logged User"){
            dossier.onwer = user;
            return dossier;
        };
        this.addSequence = function(dossier, newSequence = '0000'){
            if(!dossier.sequences){
                dossier.sequences = [newSequence];
            }
            else{
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
                    console.error('Error: ', error);
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