var app = angular.module('ectdApp')
.controller('DossierDetailsController', ['$stateParams', '$log', 'DossierService', 'NotificationService', 
    function($stateParams, $log, DossierService, notifications){

        var self = this;
        self.dossierId = $stateParams.dossierId;
        self.title = 'Loading Dossier Details...';

        DossierService.getDossierById(this.dossierId, function(err, result){
            if(err){
                notifications.addAlert('Error in retrieving dossier data. Please contact administartor.', 'danger');
            }
            else {
                self.title = createTitle(result.dossier);
                self.dossier = result.dossier;
                self.createDossierTree(result.folderTree);
            }
        });

        function createTitle(dossier){
            return dossier.ProductBrandName + "(" + dossier.ProductGenericName + ")";
        }

        self.createDossierTree = function(folderTree){
            
            self.treeData = folderTree;

            self.treeConfig = {
                core: {
                    error : function(error) {
                        console.error(error);
                    },
                    check_callback : function (operation, node, node_parent, node_position, more) {
                        return true;
                    }
                },
                plugins: ['state']
            };

            self.applyModelChanges = function(){
                return true;
            };
            self.readyCB = function(){
                $log.info("Js Tree is ready");
            };
            self.createNodeCB = function(e, created) {
                $log.info('Created Node: ', created);
            };     
            self.selectNodeCB = function(e, selected) {
                if(selected.node.original.type == 'file'){
                    var file = selected.node;
                    $log.info('Selected File: ');
                }
            };
            self.treeEventsObj = {
                'ready': self.readyCB,
                'create_node': self.createNodeCB,
                'select_node': self.selectNodeCB   // on node selected callback
            }; 
        }

        self.addNewNode = function(id){
            self.treeData.push({ id : id, parent : 'ajson3', text : 'File 1' , 'icon': 'jstree-file' });
        }
}]);