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
            var url = "/dossier";
            $http.post(url, dossier).then(
                function(result) {
                    callback(null, result);
                }, 
                function(error) {
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

        this.getDossierById = function(dossierId, callback){
            var url = '/dossier/' + dossierId;
            $http.get(url).then(
                function(data) {
                    callback(null, data);
                }, 
                function(error) {
                    callback(error);
                });
        };
    }]);