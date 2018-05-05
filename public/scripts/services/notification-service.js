var app = angular.module('ectdApp');
app.service('NotificationService', [function(){
    this.alerts = [];
    this.addAlert = function(message, alertType = 'warning'){
        this.alerts.push({msg: message, type: alertType});
    };
    this.closeAlert = function(index){
        this.alerts.splice(index,1);
    };
}]);