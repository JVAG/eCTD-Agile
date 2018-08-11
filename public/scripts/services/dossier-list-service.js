var app = angular.module('ectdApp')
.service('DossierListService', ['$http', function($http){
    this.getAllDossiers = function(callback){
        $http.get('/dossierlist').then(
            function(result) {
                if(result.data && result.data.length > 0){
                    callback(null, result.data);
                }
                else{
                    var err = new Error("No dossiers found");
                    callback(err);
                }
            }, 
            function(error) {
                console.log(error);
                callback(error.status + ": " + error.statusText);
            });
    };
}]);
